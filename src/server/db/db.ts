import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

// for query purposes
const queryClient = postgres(
  "postgres://postgres:123123@124.70.98.205:5432/postgres"
);
export const db = drizzle(queryClient, { schema });
