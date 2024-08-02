import { product } from '@/db/models';
import { pgTable, uuid, integer, timestamp, text, date, index } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const stock = pgTable(
  'stock',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    productId: uuid('product_id')
      .notNull()
      .references(() => product.id, { onUpdate: 'cascade', onDelete: 'cascade' }),
    quantity: integer('quantity').notNull().default(0),
    date: date('date').notNull(),
    reason: text('reason').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
    deletedAt: timestamp('deleted_at')
  },
  (stock) => ({
    idxProductId: index('stock_index_product_id').on(stock.productId)
  })
);

export type Stock = typeof stock.$inferInsert;

export const insertStockSchema = createInsertSchema(stock);

export const selectStockSchema = createSelectSchema(stock);
