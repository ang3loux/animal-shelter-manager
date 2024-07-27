import { pgTable, uuid, varchar, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const UserModel = pgTable(
  'user',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    first_name: varchar('first_name', { length: 255 }).notNull(),
    last_name: varchar('last_name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    password: varchar('password', { length: 255 }).notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull()
  },
  (user) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(user.email)
    };
  }
);

export type User = typeof UserModel.$inferInsert;

export const insertUserSchema = createInsertSchema(UserModel);

export const selectUserSchema = createSelectSchema(UserModel);
