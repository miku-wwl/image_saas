import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    host: "",
    port: 5432,
    user: "postgres",
    password: "",
    database: "postgres",
  },
  verbose: true,
  strict: true,
});
