import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://budget-planner_owner:gip2Qawuj3rD@ep-black-cloud-a562qmed.us-east-2.aws.neon.tech/budget-planner?sslmode=require"
);
export const db = drizzle(sql, { schema });
