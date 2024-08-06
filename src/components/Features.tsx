import { useState } from 'react';
import data from '../data.json';
import BackgroundCardSquare from './ui/BackgroundCardSquare';
import BackgroundCardRectangle from './ui/BackgroundCardRectangle';
import Info from './ui/Info';
import Wrapper from './ui/Wrapper';
import TabElement from './TabElement';

function Features() {
  const [currentFeature, setCurrentFeature] = useState(0);

  const { name, title, image, description } = data.features[currentFeature];
  const bookmarking = currentFeature === 0;

  let detailsWrapperClasses = 'relative';

  if (bookmarking) {
    detailsWrapperClasses += ' -top-[9rem]';
  } else {
    detailsWrapperClasses += ' -top-[5rem]';
  }

  const cardImgContent = bookmarking ? (
    <>
      <BackgroundCardSquare variant="smallerImgMobile" position="left" />
      <BackgroundCardRectangle variant="smallerImgMobile" position="left" />
    </>
  ) : (
    <>
      <BackgroundCardSquare variant="largerImgMobile" position="left" />
      <BackgroundCardRectangle variant="largerImgMobile" position="left" />
    </>
  );

  const handleClick = (index: number) => {
    setCurrentFeature(index);
  };

  

  return (
    <section className="px-6">
      <Info titleWrapper="h2" title="Features">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </Info>
      <Wrapper wrapperElement="ul" className="my-16">
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
      <Wrapper wrapperElement="div">
        <Wrapper wrapperElement="div" className="my-4">
          <i className="w-[90%] h-[400px] object-cover mx-auto">
            <img src={image} alt={`${name} Image`} />
          </i>
          {cardImgContent}
        </Wrapper>
        <Wrapper wrapperElement="div" className={detailsWrapperClasses}>
          <Info
            titleWrapper="h3"
            title={title}
            paragraphClasses="px-4 text-sm leading-6"
          >
            {description}
          </Info>
        </Wrapper>
      </Wrapper>
    </section>
  );
}

export default Features;
