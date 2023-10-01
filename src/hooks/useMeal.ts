import { useQuery } from '@tanstack/react-query';
import { MealData } from '@src/index.types';

const getMealsByQuery = async (searchQuery: string, signal: AbortSignal) => {
  const result = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`,
    { signal },
  );

  if (!result.ok) throw new Error('An error occured during the request!');

  const data = await result.json();

  return data as MealData;
};

export const useMeal = (searchQuery: string) => {
  const queryResult = useQuery({
    queryKey: ['meals', searchQuery],
    queryFn: ({ signal }) => getMealsByQuery(searchQuery, signal),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
  });

  return { ...queryResult };
};
