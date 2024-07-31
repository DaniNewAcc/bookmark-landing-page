import Button from "./ui/Button"
import HeroImg from "./ui/HeroImg"


function Hero() {
  return (
    <section className="flex flex-col justify-center text-center">
      <div className="flex flex-col">
        <HeroImg />
        <span className="w-5/6 h-[12.5rem] bg-SoftBlue absolute top-[9.275rem] right-0 -z-10 rounded-bl-[7.5rem]"></span>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl text-VeryDarkBlue font-medium">A Simple Bookmark Manager</h1>
        <p className="text-base text-pretty text-GrayishBlue px-9">A clean and simple interface to organize your favourite websites. Open a new 
        browser tab and see your sites load instantly. Try it for free.</p>
      </div>
      <div className="flex gap-4 justify-center mt-8 mx-7">
        <Button variant="primary" size="md">Get it on Chrome</Button>
        <Button variant="secondary" size="md">Get it on Firefox</Button>
      </div>
    </section>
  )
}

export default Hero