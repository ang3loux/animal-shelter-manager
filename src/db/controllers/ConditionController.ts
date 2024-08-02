import { db } from '@/db/connection';
import { condition, Condition } from '@/db/models';

export const getConditions = async () => {
  const selectResult = await db.select().from(condition);

  return selectResult;
};

export const createConditions = async (conditions: Condition[]) => {
  const newConditions = await db.insert(condition).values(conditions).returning();

  return newConditions;
};
