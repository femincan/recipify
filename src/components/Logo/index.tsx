// eslint-disable-next-line import/no-unresolved, import/no-absolute-path
import StarStruck from '/star-struck.png';

export const Logo = () => (
  <div className='flex place-items-center'>
    <img
      src={StarStruck}
      alt='Star struck emoji'
      className='h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32'
    />
  </div>
);
