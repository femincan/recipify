import { PropsWithChildren } from 'react';

export const Error = ({ children }: PropsWithChildren) => (
  <div className='rounded bg-error p-3'>
    <p className='text-center text-2xl leading-7 text-error-content sm:text-3xl'>
      {children}
    </p>
  </div>
);
