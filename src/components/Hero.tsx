import Button from './ui/Button';
import HeroImg from './ui/HeroImg';
import Info from './ui/Info';
import Wrapper from './ui/Wrapper';


function Hero() {
  return (
    <section>
      <Wrapper wrapperElement="div">
        <HeroImg />
        <span className="w-5/6 h-[12.5rem] bg-SoftBlue absolute top-[9.275rem] right-0 -z-10 rounded-bl-[7.5rem]"></span>
      </Wrapper>
      <Wrapper wrapperElement="div" className="gap-6">
        <Info titleWrapper="h1" title="A Simple Bookmark Manager">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </Info>
      </Wrapper>
      <div className="flex gap-4 justify-center mt-8 mx-7">
        <Button variant="primary" size="md">
          Get it on Chrome
        </Button>
        <Button variant="secondary" size="md">
          Get it on Firefox
        </Button>
      </div>
    </section>
  );
}

export default Hero;
