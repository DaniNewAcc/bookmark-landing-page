import { FormEvent, useState } from 'react';
import Button from './ui/Button';
import Info from './ui/Info';
import Wrapper from './ui/Wrapper';
import Error from './ui/Error';

type FormData = {
  emailAddress: string;
};

const INITIAL_DATA: FormData = {
  emailAddress: ''
};

function Newsletter() {
  const [data, setData] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState('');


  // helper function for updating form fields 
  function updateFields(fields: FormData) {
    setData(prev => {
      return { ...prev, ...fields };
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    updateFields({ emailAddress: value });
  };

  // email validation with regex pattern 
  const validateEmail = (emailAddress: string) => {
    let isEmailValid = true;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setErrors('');
    if (emailAddress === '') {
      setErrors('This field is required');
      isEmailValid = false;
      return isEmailValid;
    }

    if (!emailRegex.test(emailAddress)) {
      setErrors("Whoops, make sure it's an email");
      isEmailValid = false;
      return isEmailValid;
    }
    return isEmailValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const isEmailValid = validateEmail(data.emailAddress);

    if (isEmailValid) {
      console.log('subscribed!');
    }
  };

  return (
    <Wrapper
      wrapperElement="section"
      className="w-screen gap-8 py-12 px-8 bg-SoftBlue"
    >
      <Wrapper
        wrapperElement="div"
        className="text-center lg:w-[440px] lg:mx-auto lg:gap-10"
      >
        <Info
          titleWrapper="h3"
          title="Stay up-to-date with what we're doing"
          headingClasses="order-1 text-white lg:text-[1.8rem] lg:leading-[2.5rem]"
          paragraphClasses="text-sm text-white uppercase tracking-[.25em] leading-10 lg:text-xs lg:tracking-[.4575em]"
        >
          35,000+ already joined
        </Info>
      </Wrapper>
      <form
        className="flex flex-col gap-4 lg:flex-row lg:justify-center lg:w-[500px] lg:mx-auto"
        onSubmit={handleSubmit}
      >
        <Wrapper wrapperElement="div">
          <input
            className={`${
              errors ? 'border-2 border-SoftRed' : ''
            } w-full rounded-md py-[.875rem] px-6 placeholder:text-base`}
            type="text"
            placeholder="Enter your email address"
            value={data.emailAddress}
            onChange={handleChange}
          />
          {errors ? <Error errorMsg={errors} /> : null}
        </Wrapper>
        <Button type="submit" variant="submit" size="md">
          Contact Us
        </Button>
      </form>
    </Wrapper>
  );
}

export default Newsletter;
