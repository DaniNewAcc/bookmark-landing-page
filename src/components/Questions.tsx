import data from '../data.json';
import Accordion from './Accordion';
import Button from './ui/Button';
import Info from './ui/Info';
import Wrapper from './ui/Wrapper';

function Questions() {
  return (
    <section className="px-6 lg:w-[550px] lg:mx-auto lg:my-16">
      <Info titleWrapper="h2" title="Frequently Asked Questions" headingClasses='lg:text-3xl'>
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </Info>
      <Wrapper wrapperElement="div" className="h-full gap-6 mt-16">
        {data.questions.map(question => {
          return (
            <Accordion
              key={question.id}
              {...question}
            />
          );
        })}
        <Wrapper wrapperElement="div" className="items-center my-6">
          <Button variant="primary" size="sm">More Info</Button>
        </Wrapper>
      </Wrapper>
    </section>
  );
}

export default Questions;
