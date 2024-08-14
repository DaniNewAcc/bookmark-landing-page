import { useState } from 'react';
import data from '../data.json';
import Info from './ui/Info';
import Wrapper from './ui/Wrapper';
import TabElement from './TabElement';
import Button from './ui/Button';

function Features() {
  const [currentFeature, setCurrentFeature] = useState(0);

  const { name, title, image, description } = data.features[currentFeature];

  const bookmarking = currentFeature === 0

  const handleClick = (index: number) => {
    setCurrentFeature(index);
  };



  return (
    <section className="px-6">
      <Wrapper wrapperElement='div' className='lg:mx-auto lg:w-[550px]'>
        <Info titleWrapper="h2" title="Features" headingClasses='lg:text-3xl'>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </Info>
      </Wrapper>
      <Wrapper wrapperElement="ul" className="my-16 lg:flex-row lg:justify-center lg:gap-24 lg:border-b lg:border-GrayishBlue lg:w-fit lg:mx-auto">
        {data.features.map((feature, index) => {
          return (
            <TabElement
              key={feature.name}
              idx={index}
              name={feature.name}
              currentFeature={currentFeature}
              onClick={() => handleClick(index)}
            />
          );
        })}
      </Wrapper>
      <Wrapper wrapperElement="div" className="gap-16 lg:flex-row lg:gap-28">
        <div className="my-4 flex-1 w-full h-full relative">
            <img className='block w-full h-full lg:w-[90%] lg:ms-auto' src={image} alt={`${name} Image`} />
            <div className={`${bookmarking ? 'right-0 lg:h-full lg:right-[15%]' : 'lg:h-[90%] right-[30%]'} absolute bg-SoftBlue -z-10 top-[20%] w-[1000px] h-[95%] rounded-br-[150px]`}></div>
        </div>
        <Wrapper wrapperElement="div" className={`${bookmarking ? 'lg:mt-16' : 'lg:mt-20'} lg:w-1/2 lg:text-start`}>
          <Info
            titleWrapper="h3"
            title={title}
            headingClasses='lg:text-3xl'
            paragraphClasses="px-4 text-sm leading-6 lg:px-0 lg:mb-4 lg:text-balance"
          >
            {description}
          </Info>
          <div className="max-md:hidden">
            <Button variant="primary" size="xs">More Info</Button>
          </div>
        </Wrapper>
      </Wrapper>
    </section>
  );
}

export default Features;
