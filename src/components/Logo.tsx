// eslint-disable-next-line import/no-unresolved, import/no-absolute-path
import ForkKnifePlate from '/fork-knife-plate.svg';

export const Logo = () => (
  <div className='flex place-items-center'>
    <img
      src={ForkKnifePlate}
      alt='Fork, knife, and plate emoji'
      className='h-24 w-24 drop-shadow-xl sm:h-28 sm:w-28 md:h-32 md:w-32'
    />
  </div>
);
