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
      primary: 'bg-SoftBlue text-white',
      secondary: 'bg-LightGray text-VeryDarkBlue shadow-lg',
      submit: "bg-SoftRed text-white",
      nav: "bg-transparent text-white border border-white"
    },
    size: {
      md: 'w-1/2 py-4 text-sm',
      lg: 'py-4',
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});
