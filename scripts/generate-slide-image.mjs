import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const usage = () => {
  // Keep this short; detailed docs live in README/docs.
  // Example:
  //   pnpm gen:image -- --prompt "..." --out "public/images/example.png"
  return [
    'Usage:',
    '  pnpm gen:image -- --prompt "<PROMPT>" --out "public/images/<name>.png" [--model gpt-image-1.5] [--size 1024x1024] [--quality auto|low|medium|high]',
    '',
    'Env:',
    '  OPENAI_API_KEY (required)',
  ].join('\n');
};

const parseEnvValue = (rawValue) => {
  const trimmed = rawValue.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith('\'') && trimmed.endsWith('\''))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
};

const loadEnvFromFileIfPresent = async (filename) => {
  try {
    const content = await fs.readFile(path.join(process.cwd(), filename), 'utf8');
    const lines = content.split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const idx = trimmed.indexOf('=');
      if (idx === -1) continue;
      const key = trimmed.slice(0, idx).trim();
      const value = parseEnvValue(trimmed.slice(idx + 1));
      if (key === 'OPENAI_API_KEY' && value && !process.env.OPENAI_API_KEY) {
        process.env.OPENAI_API_KEY = value;
      }
    }
  } catch {
    // Ignore missing/unreadable env files.
  }
};

const getArgValue = (argv, name) => {
  const idx = argv.indexOf(name);
  if (idx === -1) return undefined;
  const value = argv[idx + 1];
  if (!value || value.startsWith('--')) {
    throw new Error(`Missing value for ${name}`);
  }
  return value;
};

const main = async () => {
  const argv = process.argv.slice(2);

  if (argv.includes('--help') || argv.includes('-h')) {
    console.log(usage());
    return;
  }

  const prompt = getArgValue(argv, '--prompt');
  const out = getArgValue(argv, '--out');
  const model = getArgValue(argv, '--model') ?? 'dall-e-3';
  const size = getArgValue(argv, '--size') ?? '1024x1024';
  const quality = getArgValue(argv, '--quality') ?? 'auto';

  if (!prompt || !out) {
    console.error('Error: --prompt and --out are required.\n');
    console.error(usage());
    process.exitCode = 1;
    return;
  }

  await loadEnvFromFileIfPresent('.env.local');
  await loadEnvFromFileIfPresent('.env');

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error('Error: OPENAI_API_KEY is not set.\n');
    console.error('Tip: create a `.env.local` file with OPENAI_API_KEY=... (this repo ignores `*.local`).');
    process.exitCode = 1;
    return;
  }

  const requestBody = {
    model,
    prompt,
    size,
    n: 1,
    response_format: 'b64_json',
  };

  // Only set quality when explicitly requested; keep API surface compatible.
  if (quality !== 'auto') {
    requestBody.quality = quality;
  }

  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (!res.ok) {
    const bodyText = await res.text();
    throw new Error(`OpenAI API error (${res.status}): ${bodyText}`);
  }

  const json = await res.json();
  const imageBase64 = json?.data?.[0]?.b64_json;
  if (!imageBase64) {
    throw new Error('OpenAI API response did not include image data (expected data[0].b64_json).');
  }

  const outPath = path.resolve(out);
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, Buffer.from(imageBase64, 'base64'));

  console.log(`Wrote image: ${out}`);
};

main().catch((err) => {
  console.error(err?.message ?? err);
  process.exitCode = 1;
});

