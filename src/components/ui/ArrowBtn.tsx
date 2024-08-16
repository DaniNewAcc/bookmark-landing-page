type ArrowBtnProps = React.HTMLAttributes<HTMLElement>;

function ArrowBtn({ className, ...props }: ArrowBtnProps) {
  return (
    <span {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" className={className}>
        <path fill="none" strokeWidth="3" d="M1 1l8 8 8-8" />
      </svg>
    </span>
  );
}

export default ArrowBtn;
