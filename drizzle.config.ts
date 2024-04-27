import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    host: "124.70.98.205",
    port: 5432,
    user: "postgres",
    password: "123123",
    database: "postgres",
  },
  verbose: true,
  strict: true,
});
