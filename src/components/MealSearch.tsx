import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useMeal } from '@src/hooks';
import { MealSearchResult } from './MealSearchResult';

export const MealSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const [defferedSearchValue, setDefferedSearchValue] = useState('');

  const queryClient = useQueryClient();

  useMeal(defferedSearchValue);

  useEffect(() => {
    let timeoutId: number | undefined;

    const searchValuesInCache = queryClient
      .getQueryCache()
      .findAll({ queryKey: ['meals'] })
      .map((cacheItem) => cacheItem.queryKey[1]);

    if (searchValuesInCache.includes(searchValue)) {
      setDefferedSearchValue(searchValue);
    } else {
      timeoutId = setTimeout(() => setDefferedSearchValue(searchValue), 500);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <div className='flex w-full flex-1 flex-col items-center justify-between gap-10'>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className='input input-secondary input-sm w-56 max-w-full rounded-full sm:input-md sm:w-96'
        placeholder='Arrabiata'
      />
      <div className='flex flex-1 items-center justify-center'>
        <MealSearchResult value={defferedSearchValue} />
      </div>
    </div>
  );
};
