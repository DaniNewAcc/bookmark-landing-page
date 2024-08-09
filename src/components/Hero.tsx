import Button from './ui/Button';
import HeroImg from './ui/HeroImg';
import Info from './ui/Info';
import Wrapper from './ui/Wrapper';

function Hero() {
  return (
    <section className='lg:flex'>
      <div className="mt-8 lg:order-2 lg:w-2/3 lg:h-[500px]">
        <HeroImg />
        {/* <div className="bg-SoftBlue relative z-10 ms-auto -mt-[380px] translate-y-32 w-1/3 h-[145px] lg:h-[200px] lg:-translate-y-28 lg:-me-16"></div>
        <div className="bg-SoftBlue relative z-10 ms-auto  translate-y-8 w-[80%] h-[140px] rounded-bl-[6rem] lg:-translate-y-28 lg:-me-16 lg:rounded-bl-[9rem]"></div>
        <div className="bg-SoftBlue relative z-10 ms-auto  translate-y-8 w-[20%] h-[140px] rounded-bl-[6rem] lg:-translate-y-64 lg:-me-16"></div> */}
      </div>
      <Wrapper wrapperElement="div" className="mt-20 gap-6 lg:text-start lg:w-1/2">
        <Info titleWrapper="h1" title="A Simple Bookmark Manager">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </Info>
        <div className="flex gap-4 justify-center mt-8 mx-7 w-2/3">
          <Button variant="primary" size="md">
            Get it on Chrome
          </Button>
          <Button variant="secondary" size="md">
            Get it on Firefox
          </Button>
        </div>
      </Wrapper>
    </section>
  );
}

export default Hero;
