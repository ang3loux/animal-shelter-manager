import { db } from '@/db/connection';
import { user, User } from '@/db/models';
import bcrypt from 'bcrypt';

export const getUsers = async () => {
  const selectResult = await db.select().from(user);

  return selectResult;
};

export const createUsers = async (users: User[]) => {
  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
  }

  const newUsers = await db.insert(user).values(users).returning();

  return newUsers;
};
