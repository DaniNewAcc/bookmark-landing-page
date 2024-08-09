import data from '../data.json';
import ExtensionCard from './ExtensionCard';
import Info from './ui/Info';
import Wrapper from './ui/Wrapper';

function Extensions() {
  return (
    <section className="px-6 mt-24">
      <Wrapper wrapperElement='div' className='lg:w-[500px] lg:mx-auto'>
        <Info titleWrapper="h2" title="Download the extension">
          We've got more browsers in the pipeline. Please do let us know if you've
          got a favourite you'd like us to prioritize.
        </Info>
      </Wrapper>
      <Wrapper
        wrapperElement="div"
        className="px-4 gap-8 mt-16 lg:flex-row lg:justify-center lg:gap-12"
      >
        {data.extensions.map(extension => {
          return <ExtensionCard key={extension.name} {...extension} />;
        })}
      </Wrapper>
    </section>
  );
}

export default Extensions;
