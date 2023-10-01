import { PropsWithChildren } from 'react';

export const Error = ({ children }: PropsWithChildren) => (
  <div className='bg-error p-3 rounded'>
    <p className='text-error-content text-center text-2xl leading-7 sm:text-3xl'>
      {children}
    </p>
  </div>
);
