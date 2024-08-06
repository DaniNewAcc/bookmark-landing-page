import Button from './ui/Button';
import Info from './ui/Info';
import Wrapper from './ui/Wrapper';

type ExtensionProps = {
  name: string;
  version: string;
  image: string;
};

function ExtensionCard({ name, version, image }: ExtensionProps) {
  return (
    <Wrapper
      wrapperElement="div"
      key={name}
      className="shadow-lg p-6 rounded-md"
    >
      <Wrapper wrapperElement="div" className="items-center mt-4 mb-8">
        <i className="mb-8">
          <img src={image} alt={`${name} Icon`} />
        </i>
        <Info
          titleWrapper="h3"
          title={`Add to ${name}`}
          headingClasses="text-xl"
          paragraphClasses="text-sm font-medium mt-2 mb-8"
        >
          Minimum version {version}
        </Info>
      </Wrapper>
      <Button variant="primary" size="lg">
        Add & Install Extension
      </Button>
    </Wrapper>
  );
}

export default ExtensionCard;
