import { pgTable, uuid, varchar, integer, timestamp, text, uniqueIndex } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const product = pgTable(
  'product',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', { length: 100 }).notNull().unique(),
    description: text('description'),
    stock: integer('stock').notNull().default(0),
    initialStock: integer('initial_stock').notNull().default(0),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
    deletedAt: timestamp('deleted_at')
  },
  (product) => ({
    idxName: uniqueIndex('product_index_name').on(product.name)
  })
);

export type Product = typeof product.$inferInsert;

export const insertProductSchema = createInsertSchema(product);

export const selectProductSchema = createSelectSchema(product);
