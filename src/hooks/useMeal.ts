import { useQuery } from '@tanstack/react-query';
import { MealApiResponse } from '@src/index.types';
import { normalizeMealData } from '@src/lib';

const getMealsByQuery = async (searchQuery: string, signal: AbortSignal) => {
  const result = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`,
    { signal },
  );

  if (!result.ok) throw new Error('An error occured during the request!');

  const data: MealApiResponse = await result.json();

  if (data.meals) {
    return data.meals.map((meal) => normalizeMealData(meal));
  }

  return null;
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
