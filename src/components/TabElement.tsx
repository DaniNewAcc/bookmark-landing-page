type TabElementProps = {
  idx: number;
  name: string;
  currentFeature: number;
  onClick: () => void;
};

function TabElement({ idx, name, currentFeature, onClick }: TabElementProps) {
  let tabElementClasses = 'text-[1.125rem] pb-6 cursor-pointer duration-200 hover:text-SoftRed lg:px-6';

  if (currentFeature === idx) {
    tabElementClasses += ' border-b-4 border-b-SoftRed text-VeryDarkBlue';
  } else {
    tabElementClasses += ' text-GrayishBlue';
  }

  return (
    <li className="max-md:border-y-GrayishBlue py-6 max-md:odd:border-y lg:border-b" onClick={onClick}>
      <a className={tabElementClasses}>{name}</a>
    </li>
  );
}

export default TabElement;
