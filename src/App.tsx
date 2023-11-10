import { Logo } from './components/Logo';
import { MealSearch } from './components/MealSearch';

export const App = () => (
  <div className='container mx-auto flex h-full w-full flex-col items-center justify-start gap-10 px-5 py-10'>
    <Logo />
    <MealSearch />
  </div>
);
