import { specie } from '@/db/models';
import { pgTable, uuid, varchar, timestamp, text, date, index } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const pet = pgTable(
  'pet',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    specieId: uuid('specie_id')
      .notNull()
      .references(() => specie.id, { onUpdate: 'cascade', onDelete: 'cascade' }),
    name: varchar('name', { length: 100 }).notNull(),
    birthDate: date('birth_date').notNull(),
    breed: varchar('breed', { length: 100 }),
    description: text('description'),
    comment: text('comment'),
    photo: varchar('photo', { length: 255 }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
    deletedAt: timestamp('deleted_at')
  },
  (pet) => ({
    idxSpecieId: index('pet_index_specie_id').on(pet.specieId),
    idxName: index('pet_index_name').on(pet.name)
  })
);

export type Pet = typeof pet.$inferInsert;

export const insertPetSchema = createInsertSchema(pet);

export const selectPetSchema = createSelectSchema(pet);
