import { createUser } from '@/db/controllers';
import { User } from '@/db/models';

const ADMIN_USER: User = {
  first_name: 'admin',
  last_name: 'admin',
  email: 'admin@email.com',
  password: '1234'
};

async function seedAdmin() {
  const { password: _password, ...user } = await createUser(ADMIN_USER);

  return Response.json({ user });
}

export async function GET() {
  return await seedAdmin();
}
