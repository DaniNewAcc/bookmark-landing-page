type TabElementProps = {
  idx: number;
  name: string;
  currentFeature: number;
  onClick: () => void;
};

function TabElement({ idx, name, currentFeature, onClick }: TabElementProps) {
  let tabElementClasses = 'text-base pb-6';

  if (currentFeature === idx) {
    tabElementClasses += ' border-b-4 border-b-SoftRed text-VeryDarkBlue';
  } else {
    tabElementClasses += ' text-GrayishBlue';
  }

  return (
    <li className="border-y-GrayishBlue py-6 odd:border-y" onClick={onClick}>
      <a className={tabElementClasses}>{name}</a>
    </li>
  );
}

export default TabElement;
