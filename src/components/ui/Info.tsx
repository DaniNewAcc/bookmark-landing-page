import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type InfoProps = {
  titleWrapper: keyof JSX.IntrinsicElements
  title: string
  headingClasses?: string
  paragraphClasses?: string
  children: ReactNode
};

function Info({ children, titleWrapper, title, headingClasses, paragraphClasses }: InfoProps) {
  const TitleContainer = titleWrapper;

  let titleClasses = 'text-VeryDarkBlue font-medium';
  let descClasses = 'text-base text-pretty text-GrayishBlue lg:text-lg';

  if (TitleContainer === 'h1') {
    titleClasses += ' text-3xl lg:text-[3rem] lg:leading-[3rem] lg:px-9';
    descClasses += ' px-9 lg:px-10';
  } else {
    titleClasses += ' text-2xl';
    descClasses += ' mt-4';
  }

  return (
    <>
      <TitleContainer className={twMerge(titleClasses, headingClasses)}>{title}</TitleContainer>
      <p className={twMerge(descClasses, paragraphClasses)}>{children}</p>
    </>
  );
}

export default Info;
