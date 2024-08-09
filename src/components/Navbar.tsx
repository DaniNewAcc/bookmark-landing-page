import data from '../data.json';
import Button from './ui/Button';
import Wrapper from './ui/Wrapper';

function Navbar() {
  return (
    <nav>
      <Wrapper wrapperElement="ul" className="flex-row items-center gap-12">
        {data.items.map(item => {
          return (
            <li
              key={item.id}
              className="w-full py-4 text-VeryDarkBlue text-center uppercase text-base tracking-widest"
            >
              {item.name}
            </li>
          );
        })}
        <Button variant="nav" size="xl">
          Login
        </Button>
      </Wrapper>
    </nav>
  );
}

export default Navbar;
