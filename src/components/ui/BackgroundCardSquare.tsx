import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import cn from '../../utils/cn';

interface BGCardSquareProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof BackgroundCardSquareVariants> {}

function BackgroundCardSquare({ variant, position, ...props }: BGCardSquareProps) {
  return (
    <>
      <span
        {...props}
        className={cn(BackgroundCardSquareVariants({ variant, position }))}
      ></span>
    </>
  );
}

export default BackgroundCardSquare;

const BackgroundCardSquareVariants = cva('bg-SoftBlue absolute -z-10', {
  variants: {
    variant: {
      smallerImgMobile: '-bottom-[84%] w-[80%] h-[12rem]',
      largerImgMobile: '-bottom-[89%] w-[68%] h-[14.5rem]'
    },
    position: {
      left: 'left-0 rounded-br-[6.5rem]',
      right: 'right-0 rounded-bl-[6.5rem]'
    }
  },
  defaultVariants: {
    variant: 'smallerImgMobile',
    position: 'left'
  }
});
