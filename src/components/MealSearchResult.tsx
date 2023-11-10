import { Error } from '@src/components/Error';
import { useMeal } from '@src/hooks';
import { MealList } from './MealList';

export const MealSearchResult = ({ value }: { value: string }) => {
  const { data, error, status } = useMeal(value);

  if (status === 'pending') {
    return <div className='loading loading-dots w-20 text-secondary sm:w-24' />;
  }

  if (status === 'error') {
    return <Error>{error.message}</Error>;
  }

  return <MealList meals={data} />;
};
