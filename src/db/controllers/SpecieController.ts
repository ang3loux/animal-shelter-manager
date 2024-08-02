import { db } from '@/db/connection';
import { specie, Specie } from '@/db/models';

export const getSpecies = async () => {
  const selectResult = await db.select().from(specie);

  return selectResult;
};

export const createSpecies = async (species: Specie[]) => {
  const newSpecies = await db.insert(specie).values(species).returning();

  return newSpecies;
};
