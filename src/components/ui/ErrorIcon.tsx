function ErrorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="size-6">
      <g fill="none" fillRule="evenodd">
        <circle cx="12" cy="12" r="12" fill="#FA5959" />
        <g fill="#FFF" transform="translate(11 6)">
          <rect width="3" height="7" rx="1" />
          <rect width="3" height="2" y="8" rx="1" />
        </g>
      </g>
    </svg>
  );
}

export default ErrorIcon;
