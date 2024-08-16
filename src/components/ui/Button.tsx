import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from '../../utils/cn';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn(buttonVariants({ variant, size }))}>
      {children}
    </button>
  );
}

export default Button;

const buttonVariants = cva('rounded-md font-medium', {
  variants: {
    variant: {
      primary: 'bg-SoftBlue border-2 border-SoftBlue text-white duration-200 hover:text-SoftBlue hover:bg-white',
      secondary: 'bg-LightGray text-VeryDarkBlue border-2 border-transparent shadow-lg duration-200 hover:text-VeryDarkBlue hover:border-VeryDarkBlue',
      submit: "bg-SoftRed border-2 border-SoftRed text-white hover:bg-white hover:text-SoftRed duration-200 max-md:w-full lg:w-1/4",
      menu: "bg-transparent text-white uppercase tracking-widest border border-white",
      nav: "bg-SoftRed border-2 border-SoftRed text-white uppercase tracking-widest duration-200 hover:text-SoftRed hover:bg-white",
    },
    size: {
      xs: 'w-1/3 py-4 text-sm lg:w-1/5 lg:py-[.875rem]',
      sm: 'w-1/3 py-4 text-sm lg:w-1/4 lg:py-[.875rem]',
      md: 'w-1/2 py-3 text-base',
      lg: 'w-full py-3 text-base lg:px-10 lg:py-[.875rem]',
      xl: 'px-9 py-[.625rem] text-base'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});
