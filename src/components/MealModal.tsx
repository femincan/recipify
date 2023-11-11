import { RefObject } from 'react';
import { MealData } from '@src/index.types';

export const MealModal = ({
  modalRef,
  mealData,
}: {
  modalRef: RefObject<HTMLDialogElement>;
  mealData: MealData | null;
}) => (
  <dialog ref={modalRef} className='modal'>
    <div className='modal-box flex overflow-hidden p-0'>
      <form method='dialog'>
        <button
          type='submit'
          className='btn btn-circle btn-ghost btn-sm absolute right-5 top-2'
        >
          ✕
        </button>
      </form>
      <div id='scroll-box' className='max-h-full overflow-y-auto px-8 py-10'>
        <div className='flex flex-col items-start justify-center gap-8'>
          <h2 className='self-center text-center text-3xl font-bold'>
            {mealData?.name}
          </h2>
          <figure className='self-center overflow-hidden rounded-md shadow-md'>
            <img
              src={mealData?.thumb}
              alt={mealData?.name}
              width={400}
              height={400}
            />
          </figure>
          <div>
            <div className='badge badge-secondary badge-lg mr-2'>
              {mealData?.category}
            </div>
            <div className='badge badge-primary badge-lg'>{mealData?.area}</div>
          </div>
          <div>
            <h3 className='mb-3 text-2xl'>Ingredients</h3>
            <ul>
              {mealData?.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='mb-3 text-2xl'>Instructions</h3>
            <p>{mealData?.instructions}</p>
          </div>
        </div>
      </div>
    </div>
    <form method='dialog' className='modal-backdrop'>
      <button type='submit' className='cursor-default'>
        close
      </button>
    </form>
  </dialog>
);
