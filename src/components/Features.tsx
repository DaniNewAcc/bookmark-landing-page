import { useState } from 'react';
import data from '../data.json';
import Info from './ui/Info';
import Wrapper from './ui/Wrapper';
import TabElement from './TabElement';
import Button from './ui/Button';

function Features() {
  const [currentFeature, setCurrentFeature] = useState(0);

  const { name, title, image, description } = data.features[currentFeature];
  const bookmarking = currentFeature === 0;

  const handleClick = (index: number) => {
    setCurrentFeature(index);
  };

  return (
    <section className="px-6">
      <Wrapper wrapperElement='div' className='lg:mx-auto lg:w-[500px]'>
        <Info titleWrapper="h2" title="Features">
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
      <Wrapper wrapperElement="div" className="gap-16 lg:flex-row">
        {/* make component for bg elements */}
        <div className="my-4 lg:w-2/3">
          {/* <div
            className={`bg-SoftBlue relative z-10 -left-10 translate-y-8 w-1/3 lg:-left-[5.5rem] ${
              bookmarking ? 'h-[110px]' : 'h-[170px]'
            }`}
          ></div>
          <div className="bg-SoftBlue relative z-10 -left-10 lg:-left-[5.5rem] translate-y-8 w-[95%] h-[80px] rounded-br-[6.5rem] lg:w-[75%]"></div> */}
          {/* <div
            className={`w-[90%] relative z-20  translate-x-4 lg:w-[70%] ${
              bookmarking ? '-mt-[190px]' : '-mt-[250px]'
            }`}
          > */}
            <i className=" object-cover">
              <img src={image} alt={`${name} Image`} />
            </i>
          {/* </div> */}
        </div>
        <Wrapper wrapperElement="div" className='w-1/2 lg:text-start'>
          <Info
            titleWrapper="h3"
            title={title}
            paragraphClasses="px-4 text-sm leading-6 lg:px-0 lg:mb-4 lg:text-balance"
          >
            {description}
          </Info>
          <Button variant="primary" size="sm" className='max-md:hidden'>More Info</Button>
        </Wrapper>
      </Wrapper>
    </section>
  );
}

export default Features;
