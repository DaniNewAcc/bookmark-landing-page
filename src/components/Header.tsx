import logoImg from '/images/logo-bookmark.svg'

function Header() {
  return (
    <header className='w-screen flex items-center justify-between p-8'>
        <img src={logoImg} alt="Bookmark Logo" />
        <div>
          btn
        </div>
    </header>
  )
}

export default Header