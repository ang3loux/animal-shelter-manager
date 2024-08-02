import { pgTable, uuid, varchar, timestamp, text, index } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const person = pgTable(
  'person',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    firstName: varchar('first_name', { length: 100 }).notNull(),
    lastName: varchar('last_name', { length: 100 }).notNull(),
    email: varchar('email', { length: 255 }),
    phone: varchar('phone', { length: 20 }).notNull(),
    address: text('address').notNull(),
    comment: text('comment'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
    deletedAt: timestamp('deleted_at')
  },
  (person) => ({
    idxName: index('person_index_name').on(person.firstName, person.lastName),
    idxEmail: index('person_index_email').on(person.email)
  })
);

export type Person = typeof person.$inferInsert;

export const insertPersonSchema = createInsertSchema(person);

export const selectPersonSchema = createSelectSchema(person);
