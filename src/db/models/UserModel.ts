import { pgTable, uuid, varchar, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const user = pgTable(
  'user',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    username: varchar('username', { length: 20 }).notNull().unique(),
    password: varchar('password', { length: 255 }).notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
    deletedAt: timestamp('deleted_at')
  },
  (user) => ({
    idxUsername: uniqueIndex('user_index_username').on(user.username)
  })
);

export type User = typeof user.$inferInsert;

export const insertUserSchema = createInsertSchema(user);

export const selectUserSchema = createSelectSchema(user);
