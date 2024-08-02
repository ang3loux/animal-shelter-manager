// import { createUsers, createSpecies, createConditions } from '@/db/controllers';
// import { User, Specie, Condition } from '@/db/models';

// const ADMIN_USER: User = { username: 'admin', password: '1234' };

// const SPECIES: Specie[] = [{ name: 'Dog' }, { name: 'Cat' }];

// const CONDITIONS: Condition[] = [
//   { name: 'Stray', description: 'Pet in stray condition' },
//   { name: 'Rescued', description: 'Pet in shelter or foster home' },
//   { name: 'Adopted', description: 'Pet in permanent home' },
//   { name: 'Returned', description: 'Pet returned to shelter or foster home' },
//   { name: 'Missing', description: 'Missing pet' },
//   { name: 'Deceased', description: 'Deceased pet' }
// ];

// async function seedAdmin() {
//   const [user] = await createUsers([ADMIN_USER]);

//   return { user };
// }

// async function seedSpecies() {
//   const species = await createSpecies(SPECIES);

//   return { species };
// }

// async function seedConditions() {
//   const conditions = await createConditions(CONDITIONS);

//   return { conditions };
// }

export async function GET() {
  // const newUser = await seedAdmin();
  // const newSpecies = await seedSpecies();
  // const newConditions = await seedConditions();
  // return Response.json({ msg: 'Success!', ...newUser, ...newSpecies, ...newConditions });
  return Response.json({ msg: 'hey there!' });
}
