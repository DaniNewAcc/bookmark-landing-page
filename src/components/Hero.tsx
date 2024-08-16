import Button from './ui/Button';
import Info from './ui/Info';
import Wrapper from './ui/Wrapper';
import heroImage from '/images/illustration-hero.svg';

function Hero() {
  return (
    <Wrapper wrapperElement="section" className="items-center lg:flex-row">
      <div className="mt-8 flex-1 relative w-full h-full lg:order-2 ">
        <img
          className="block mx-auto w-[90%] lg:w-full lg:h-full lg:ms-6"
          src={heroImage}
          alt="Hero Image"
        />
        <div className="bg-SoftBlue absolute -z-10 w-[300px] h-[85%] top-[20%] left-[20%] rounded-bl-[110px] sm:w-[350px] md:w-[615px] lg:w-[450px] xl:w-[520px] xl:h-[75%] xl:top-[30%] xl:left-[31%] xl:rounded-bl-[150px] 2xl:w-[1000px]"></div>
      </div>
      <Wrapper
        wrapperElement="div"
        className="mt-20 gap-6 lg:w-1/2 lg:mt-6 lg:text-start"
      >
        <Info titleWrapper="h1" title="A Simple Bookmark Manager" paragraphClasses='lg:text-xl'>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </Info>
        <div className="flex gap-4 justify-center mt-4 mx-10 lg:w-[60%] lg:mt-2">
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
