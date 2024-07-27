import { defineConfig } from 'drizzle-kit';

import { env } from '@/lib/env';

export default defineConfig({
  schema: './src/db/models',
  out: './src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: { url: env.POSTGRES_URL },
  strict: true,
  verbose: true
});
