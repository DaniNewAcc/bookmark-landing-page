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
      className="shadow-lg py-6 rounded-md lg:first-of-type:mb-16 lg:even:mt-8 lg:even:mb-8 lg:last-of-type:mt-16"
    >
      <Wrapper wrapperElement="div" className="bg-dots bg-no-repeat bg-bottom items-center mt-4 mb-8">
        <i className="mb-8">
          <img src={image} alt={`${name} Icon`} />
        </i>
        <Info
          titleWrapper="h3"
          title={`Add to ${name}`}
          headingClasses="text-xl lg:text-2xl"
          paragraphClasses="text-sm font-medium mt-2 mb-8"
        >
          Minimum version {version}
        </Info>
      </Wrapper>
      <Wrapper wrapperElement='div' className='px-6'>
        <Button variant="primary" size="lg">
          Add & Install Extension
        </Button>
      </Wrapper>
    </Wrapper>
  );
}

export default ExtensionCard;
