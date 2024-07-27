import { db } from '@/db/connection';
import { UserModel, User } from '@/db/models';
import bcrypt from 'bcrypt';

export const getUsers = async () => {
  const selectResult = await db.select().from(UserModel);

  return selectResult;
};

export const createUser = async (user: User) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const [newUser] = await db
    .insert(UserModel)
    .values({ ...user, password: hashedPassword })
    .returning();

  return newUser;
};
