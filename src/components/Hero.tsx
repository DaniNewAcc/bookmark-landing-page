import Button from './ui/Button';
import Info from './ui/Info';
import Wrapper from './ui/Wrapper';
import heroImage from '/images/illustration-hero.svg'


function Hero() {
  return (
    <section className='lg:flex'>
      <div className="mt-8 flex-1 relative w-full h-full lg:order-2 ">
        <img className='block w-full h-full' src={heroImage} alt="" />
        <div className='absolute top-[10%] left-[30%] bg-SoftBlue h-full w-[1000px] -z-10 rounded-bl-[150px]'></div>        
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
