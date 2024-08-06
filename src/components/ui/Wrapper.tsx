import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type WrapperProps = {
  wrapperElement: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
};

function Wrapper({ children, className, wrapperElement }: WrapperProps) {
  const WrapperType = wrapperElement;
  return (
    <WrapperType className={twMerge('flex flex-col', className)}>
      {children}
    </WrapperType>
  );
}

export default Wrapper;
