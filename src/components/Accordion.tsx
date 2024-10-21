import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBtn from './ui/ArrowBtn';
import Wrapper from './ui/Wrapper';

type AccordionProps = {
  id: number;
  description: string;
  answer: string;
};

function Accordion({ id, description, answer, ...props }: AccordionProps) {
  const [selected, setSelected] = useState<number | null>(null);

  // answer content + animation for transitioning between selected accordion with framer motion library
  const answerContent =
    selected === id ? (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{
          bounce: 0,
          stiffness: 200,
          ease: 'easeIn'
        }}
      >
        <p className="text-start text-pretty text-base text-GrayishBlue leading-8 pb-8">
          {answer}
        </p>
      </motion.div>
    ) : null;

  const handleSelect = () => {
    setSelected(selected ? null : id);
  };

  let accordionClasses = 'gap-8 border-b';
  let arrowBtnClasses = 'cursor-pointer duration-300 hover:stroke-SoftRed';

  // styling for active state 

  if (selected !== id) {
    accordionClasses += ' pb-4';
    arrowBtnClasses += ' stroke-SoftBlue';
  } else {
    arrowBtnClasses += ' stroke-SoftRed rotate-180';
  }

  return (
    <Wrapper wrapperElement="div" className={accordionClasses}>
      <div
        {...props}
        className="flex items-center justify-between"
        onClick={handleSelect}
      >
        <p className="text-base text-VeryDarkBlue cursor-pointer duration-200 hover:text-SoftRed">{description}</p>
        <ArrowBtn className={arrowBtnClasses} />
      </div>
      <AnimatePresence>{answerContent}</AnimatePresence>
    </Wrapper>
  );
}

export default Accordion;
