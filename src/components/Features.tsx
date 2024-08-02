import { useState } from 'react';
import data from '../data.json';
import BackgroundCardSquare from './ui/BackgroundCardSquare';
import BackgroundCardRectangle from './ui/BackgroundCardRectangle';

function Features() {
  const [currentFeature, setCurrentFeature] = useState(0);

  const { name, title, image, description } = data.features[currentFeature];
  const bookmarking = currentFeature === 0;

  let detailsWrapperClasses = 'flex flex-col relative'

  if (bookmarking) {
    detailsWrapperClasses += ' -top-[9rem]'
  } else {
    detailsWrapperClasses += ' -top-[5rem]'
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
  )

  return (
    <section className="px-6">
      <h2 className="text-3xl text-VeryDarkBlue font-medium">Features</h2>
      <p className="text-base text-pretty text-GrayishBlue mt-4">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <ul className="flex flex-col my-16">
        {data.features.map((feature, index) => {
          return (
            <li
              className="border-y-GrayishBlue py-6 odd:border-y"
              key={feature.name}
              onClick={() => setCurrentFeature(index)}
            >
              <a
                className={`${
                  currentFeature === index
                    ? 'border-b-4 border-b-SoftRed text-VeryDarkBlue'
                    : 'text-GrayishBlue'
                } pb-6 text-base`}
              >
                {feature.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-col">
        <div className="flex flex-col my-4">
          <i className="w-[90%] h-[400px] object-cover mx-auto">
            <img src={image} alt={`${name} Image`} />
          </i>
          {cardImgContent}
        </div>
        <div className={detailsWrapperClasses}>
          <h3 className="text-2xl text-VeryDarkBlue font-medium">{title}</h3>
          <p className="mt-4 px-4 text-pretty text-sm text-GrayishBlue leading-6">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
