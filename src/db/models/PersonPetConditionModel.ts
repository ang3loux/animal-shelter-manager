import { pet, person, condition } from '@/db/models';
import { pgTable, uuid, varchar, timestamp, text, date, index } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const personPetCondition = pgTable(
  'person_pet_condition',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    petId: uuid('pet_id')
      .notNull()
      .references(() => pet.id, { onUpdate: 'cascade', onDelete: 'cascade' }),
    personId: uuid('person_id')
      .notNull()
      .references(() => person.id, { onUpdate: 'cascade', onDelete: 'cascade' }),
    conditionId: uuid('condition_id')
      .notNull()
      .references(() => condition.id, { onUpdate: 'cascade', onDelete: 'cascade' }),
    date: date('date').notNull(),
    address: text('address').notNull(),
    comment: text('comment'),
    photo: varchar('photo', { length: 255 }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
    deletedAt: timestamp('deleted_at')
  },
  (ppc) => ({
    idxPetId: index('ppc_index_pet_id').on(ppc.petId),
    idxPersonId: index('ppc_index_person_id').on(ppc.personId),
    idxConditionId: index('ppc_index_condition_id').on(ppc.conditionId),
    idxDate: index('ppc_index_date').on(ppc.date)
  })
);

export type PersonPetCondition = typeof personPetCondition.$inferInsert;

export const insertPersonPetConditionSchema = createInsertSchema(personPetCondition);

export const selectPersonPetConditionSchema = createSelectSchema(personPetCondition);
