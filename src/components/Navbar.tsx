import data from '../data.json';
import ListItem from './ListItem';
import Button from './ui/Button';
import Wrapper from './ui/Wrapper';

function Navbar() {
  return (
    <nav>
      <Wrapper wrapperElement="div" className="flex-row items-center me-5 gap-8">
        <Wrapper wrapperElement='ul' className='flex-row gap-8'>
          {data.items.map(item => {
            return (
              <ListItem
                key={item.id}
                className="w-full py-4 text-VeryDarkBlue text-center text-sm"
              >
                {item.name}
              </ListItem>
            );
          })}
        </Wrapper>
        <Button variant="nav" size="xl">
          Login
        </Button>
      </Wrapper>
    </nav>
  );
}

export default Navbar;
