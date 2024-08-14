import { useEffect, useState } from 'react';
import HamburgerIcon from './ui/HamburgerIcon';
import logoImg from '/images/logo-bookmark.svg';
import Menu from './Menu';
import Navbar from './Navbar';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // get the current width of the window
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // hamburger menù handler
  const handleClick = () => {
    setIsOpen(open => !open);
  };

  return (
    <header className="w-screen flex items-center justify-between p-8 lg:px-32">
      {!isOpen ? <img src={logoImg} alt="Bookmark Logo" /> : null}
      {screenWidth < 1024 ? (
        <div className="absolute z-50 right-8 top-9 md:hidden">
          {!isOpen ? (
            <button onClick={handleClick}>
              <HamburgerIcon />
            </button>
          ) : (
            <Menu onClick={handleClick} />
          )}
        </div>
      ) : (
        <Navbar />
      )}
    </header>
  );
}

export default Header;
