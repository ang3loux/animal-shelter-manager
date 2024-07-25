import { H1, H2 } from '@/components/atoms/Heading';
import { P } from '@/components/atoms/P';

const featuresItems = [
  { icon: '🏎️', name: 'Next.js (app routing)' },
  { icon: '🔥', name: 'Type checking TypeScript' },
  { icon: '💅', name: 'Tailwind CSS' },
  { icon: '✨', name: 'ESlint' },
  { icon: '✨', name: 'Prettier' },
  { icon: '🧪', name: 'Jest' },
  { icon: '🧪', name: 'React Testing Library' },
  { icon: '📕', name: 'Storybook' },
  { icon: '💎', name: 'Atomic Design' },
  { icon: '🚀', name: 'GitHub Actions' },
  { icon: '💻', name: 'T3 Env' },
  { icon: '🏁', name: 'Absolute Imports using `@` prefix' }
];

const HomePage = () => (
  <div>
    <section className="bg-white px-4 dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <div className="mx-auto place-self-center">
          <H1>Next.js Enterprise Boilerplate</H1>
          <P>
            Boilerplate and Starter for Next.js, Tailwind CSS and TypeScript ⚡️ Made with developer
            experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, React
            Testing Library, PostCSS, Tailwind CSS, Storybook, Plop, GH actions.
          </P>
        </div>
      </div>
    </section>
    <div className="mx-auto mt-4 px-4 max-w-screen-lg">
      <H2>🚀 Features:</H2>
      <ul className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
        {featuresItems.map(({ icon, name }) => (
          <li
            key={name}
            className="flex flex-col text-center items-center hover:scale-105 transition-all hover:shadow-xl duration-300 justify-center gap-2 px-4 py-6 border rounded-lg shadow"
          >
            <span className="text-xl">{icon}</span>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default HomePage;
