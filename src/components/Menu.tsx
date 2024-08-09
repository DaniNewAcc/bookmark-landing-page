// import CloseIcon from './ui/CloseIcon';
import data from '../data.json';
import Wrapper from './ui/Wrapper';
import Button from './ui/Button';
import LogoIcon from './ui/LogoIcon';

function Menu() {

  return (
    <div className="w-screen h-[calc(100vh+10%)] bg-VeryDarkBlue bg-opacity-95 fixed left-0 top-0 z-40">
      <div className="flex items-center justify-between py-8 px-11">
        <div className="flex items-center">
          <LogoIcon circleClasses='fill-white' pathClasses='fill-VeryDarkBlue' />
          <h3 className="text-white uppercase tracking-wide">Bookmark</h3>
        </div>
      </div>
      <Wrapper wrapperElement="div" className="gap-10">
        <Wrapper wrapperElement="ul" className="items-center px-10">
          {data.items.map(item => {
            return (
              <li
                key={item.id}
                className="w-full py-4 text-white text-center text-base uppercase tracking-widest odd:border-y odd:border-y-GrayishBlue last-of-type:mb-6"
              >
                {item.name}
              </li>
            );
          })}
          <Button variant="menu" size="lg">
            Login
          </Button>
        </Wrapper>
        <div className="w-full flex items-center justify-center gap-10 translate-y-36">
          {data.logos.map(logo => {
            return (
              <i key={logo.id} className="w-5 object-contain">
                <img src={logo.icon} alt={`${logo.name} Icon`} />
              </i>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
}

export default Menu;