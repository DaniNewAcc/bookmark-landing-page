import Button from './ui/Button';
import Info from './ui/Info';
import Wrapper from './ui/Wrapper';
import heroImage from '/images/illustration-hero.svg';

function Hero() {
  return (
    <Wrapper wrapperElement="section" className="items-center lg:flex-row">
      <div className="mt-8 flex-1 relative w-full h-full lg:order-2 ">
        <img
          className="block mx-auto w-[90%] lg:w-full lg:h-full"
          src={heroImage}
          alt="Hero Image"
        />
        <div className="bg-SoftBlue absolute -z-10 w-[300px] h-[90%] top-[17%] left-[20%] rounded-bl-[150px] lg:w-[520px] lg:h-[70%] lg:top-[35%] lg:left-[30%]"></div>
      </div>
      <Wrapper
        wrapperElement="div"
        className="mt-20 gap-6 lg:w-1/2 lg:mt-4 lg:text-start "
      >
        <Info titleWrapper="h1" title="A Simple Bookmark Manager" paragraphClasses='lg:text-xl'>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </Info>
        <div className="flex gap-4 justify-center mt-8 mx-7 lg:w-2/3 lg:mt-0">
          <Button variant="primary" size="md">
            Get it on Chrome
          </Button>
          <Button variant="secondary" size="md">
            Get it on Firefox
          </Button>
        </div>
      </Wrapper>
    </Wrapper>
  );
}

export default Hero;
