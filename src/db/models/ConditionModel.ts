import { pgTable, uuid, varchar, timestamp, text, uniqueIndex } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const condition = pgTable(
  'condition',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', { length: 100 }).notNull().unique(),
    description: text('description'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
    deletedAt: timestamp('deleted_at')
  },
  (condition) => ({
    idxName: uniqueIndex('condition_index_name').on(condition.name)
  })
);

export type Condition = typeof condition.$inferInsert;

export const insertConditionSchema = createInsertSchema(condition);

export const selectConditionSchema = createSelectSchema(condition);
