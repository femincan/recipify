import { useRef, useState } from 'react';
import { Error } from '@src/components/Error';
import { MealData } from '@src/index.types';
import { MealCard } from './MealCard';
import { MealModal } from './MealModal';

type MealListProps = { meals: MealData[] | undefined };

export const MealList = ({ meals }: MealListProps) => {
  const [currentMeal, setCurrentMeal] = useState<MealData | null>(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  const showModal = (mealData: MealData) => {
    setCurrentMeal(mealData);

    if (modalRef.current) {
      const scrollBox = modalRef.current.querySelector('#scroll-box');

      if (scrollBox) {
        scrollBox.scrollTop = 0;
      }
    }

    setTimeout(() => modalRef.current?.showModal());
  };

  if (!meals) {
    return <Error>We couldn&apos;t find what you were looking for</Error>;
  }

  return (
    <>
      <div className='grid max-w-7xl grid-cols-1 gap-8 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {meals.map((meal) => (
          <MealCard mealData={meal} key={meal.id} showModal={showModal} />
        ))}
      </div>
      <MealModal modalRef={modalRef} mealData={currentMeal} />
    </>
  );
};
