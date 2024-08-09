import ErrorIcon from "./ErrorIcon";

type ErrorProps = {
    errorMsg: string
}

function Error({ errorMsg }: ErrorProps) {
  return (
    <>
      <span className="ms-auto -translate-y-5 -translate-x-4 -mt-5">
        <ErrorIcon />
      </span>
      <div className="w-full text-start bg-SoftRed text-xs ps-4 py-1 -mt-1 rounded-b-md text-white italic tracking-widest border-2 border-SoftRed">
        {errorMsg}
      </div>
    </>
  );
}

export default Error;
