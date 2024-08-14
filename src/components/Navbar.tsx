import data from '../data.json';
import ListItem from './ListItem';
import Button from './ui/Button';
import Wrapper from './ui/Wrapper';

function Navbar() {
  return (
    <nav>
      <Wrapper wrapperElement="ul" className="flex-row items-center gap-12">
        {data.items.map(item => {
          return (
            <ListItem
              key={item.id}
              className="w-full py-4 text-VeryDarkBlue text-center text-base"
            >
              {item.name}
            </ListItem>
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
