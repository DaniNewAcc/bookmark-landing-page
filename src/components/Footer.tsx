import LogoIcon from './ui/LogoIcon';
import data from '../data.json';
import Wrapper from './ui/Wrapper';
import TwitterIcon from './ui/TwitterIcon';
import FacebookIcon from './ui/FacebookIcon';

function Footer() {
  return (
    <footer className="bg-VeryDarkBlue py-10 space-y-8 px-28">
      <div className="flex flex-col gap-6 justify-center items-center lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-6 items-center lg:flex-row">
          <div className="flex items-center">
            <LogoIcon />
            <h3 className="text-white uppercase tracking-wide">Bookmark</h3>
          </div>
          <Wrapper
            wrapperElement="ul"
            className="items-center gap-6 lg:flex-row lg:justify-between lg:ms-12"
          >
            {data.items.map(item => {
              return (
                <li
                  key={item.id}
                  className="text-GrayishBlue text-sm uppercase tracking-widest cursor-pointer duration-200 hover:text-SoftRed"
                >
                  {item.name}
                </li>
              );
            })}
          </Wrapper>
        </div>
        <div className="flex items-center justify-center gap-10">
          {data.logos.map(logo => {
            return (
              <i key={logo.id} className="w-5 object-contain cursor-pointer duration-200">
                {logo.name === "Twitter" ? <TwitterIcon /> : <FacebookIcon />}
              </i>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
