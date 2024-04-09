/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import RedCheck from '../assets/red-check.svg';
import BlueCheck from '../assets/blue-check.svg';
import YellowCheck from '../assets/yellow-check.svg';

export function hexToRGBA(hex, opacity) {
  hex = hex.replace('#', '');

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export const EllipseSvg = ({ color }) => {
  return (
    <svg
      width='682'
      height='311'
      viewBox='0 0 682 311'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_f_156_2194)'>
        <ellipse
          cx='341'
          cy='-24.764'
          rx='140.412'
          ry='134.846'
          fill={`${color}`}
          fill-opacity='0.5'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_156_2194'
          x='0.587891'
          y='-359.61'
          width='680.824'
          height='669.693'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur
            stdDeviation='100'
            result='effect1_foregroundBlur_156_2194'
          />
        </filter>
      </defs>
    </svg>
  );
};

export const OverviewNewColumn = data => {
  const sharedData = [
    RedCheck,
    RedCheck,
    BlueCheck,
    BlueCheck,
    YellowCheck,
    YellowCheck,
  ];
  return data.map((item, index) => {
    return {
      ...item,
      icon: sharedData[index],
    };
  });
};

export const validateEmail = email => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhoneNumber = (number, setisValidNumber) => {
  const nigeriaRegex = /^\+234\d{10}$/;
  const otherRegex = /^(080|070|081|090|091)\d{8}$/;
  const hasAlphabets = /[a-zA-Z]/.test(number);
  const isValidNigeria = nigeriaRegex.test(number);
  const isValidOther = otherRegex.test(number);
  if (hasAlphabets || number.length > 10) {
    setisValidNumber(isValidNigeria || isValidOther);
  } else setisValidNumber(true);
};
