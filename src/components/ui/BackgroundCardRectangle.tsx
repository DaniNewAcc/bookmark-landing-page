import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import cn from '../../utils/cn';

interface BGCardRectangleProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof BackgroundCardRectangleVariants> {}

function BackgroundCardRectangle({ variant, position, ...props }: BGCardRectangleProps) {
  return (
    <>
      <span
        {...props}
        className={cn(BackgroundCardRectangleVariants({ variant, position }))}
      ></span>
    </>
  );
}

export default BackgroundCardRectangle;

const BackgroundCardRectangleVariants = cva('bg-SoftBlue absolute -z-10', {
  variants: {
    variant: {
      smallerImgMobile: '-bottom-[84%] w-[80%] h-[4rem]',
      largerImgMobile: '-bottom-[89%] w-[80%] h-[4.5rem]'
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
