import { MealData } from '@src/index.types';

type MealCardProps = {
  mealData: MealData;
  showModal: (mealData: MealData) => void;
};

export const MealCard = ({ mealData, showModal }: MealCardProps) => (
  <button
    onClick={() => showModal(mealData)}
    type='button'
    className='card glass card-compact w-full bg-base-100 bg-opacity-50 shadow-md'
  >
    <figure>
      <img
        src={mealData.thumb}
        alt={mealData.name}
        loading='lazy'
        height={500}
        width={500}
      />
    </figure>
    <div className='card-body'>
      <h2 className='card-title'>{mealData.name}</h2>
      <div className='flex h-auto gap-1'>
        <span className='badge badge-secondary badge-sm'>
          {mealData.category}
        </span>
        <span className='badge badge-primary badge-sm'>{mealData.area}</span>
      </div>
    </div>
  </button>
);
