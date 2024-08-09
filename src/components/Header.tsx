import { useEffect, useState } from 'react'
import HamburgerIcon from './ui/HamburgerIcon'
import logoImg from '/images/logo-bookmark.svg'
import Menu from './Menu';
import CloseIcon from './ui/CloseIcon';
import Navbar from './Navbar';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    setIsOpen((open) => !open)
  }

  return (
    <header className='w-screen flex items-center justify-between p-8 lg:px-28'>
        {!isOpen ? <img src={logoImg} alt="Bookmark Logo" /> : null}
        {screenWidth < 1024 ?
        <div className='absolute z-50 right-11 top-9 md:hidden'>
          <button onClick={handleClick}>{isOpen ? <CloseIcon /> : <HamburgerIcon />}</button>
        </div> : <Navbar />}
        {isOpen ? <Menu /> : null}
    </header>
  )
}

export default Header