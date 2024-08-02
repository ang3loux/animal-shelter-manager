import { pgTable, uuid, varchar, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const specie = pgTable(
  'specie',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', { length: 100 }).notNull().unique(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
    deletedAt: timestamp('deleted_at')
  },
  (specie) => ({
    idxName: uniqueIndex('specie_index_name').on(specie.name)
  })
);

export type Specie = typeof specie.$inferInsert;

export const insertSpecieSchema = createInsertSchema(specie);

export const selectSpecieSchema = createSelectSchema(specie);
