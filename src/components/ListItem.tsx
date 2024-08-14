import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ListItemProps = {
  className?: string;
  children: ReactNode;
};

function ListItem({ children, className }: ListItemProps) {
  return (
    <li
      className={twMerge(
        'uppercase tracking-widest cursor-pointer duration-200 hover:text-SoftRed',
        className
      )}
    >
      {children}
    </li>
  );
}

export default ListItem;
