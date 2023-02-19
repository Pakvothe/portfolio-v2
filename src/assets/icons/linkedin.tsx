import { IconProperties } from "@/types";
import { FC } from "react";

export const LinkedInIcon: FC<IconProperties> = ({
  size,
  color,
  weight,
  onClick,
  className,
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      onClick={onClick}
    >
      <path fill="none" d="M0 0H256V256H0z"></path>
      <rect
        width="184"
        height="184"
        x="36"
        y="36"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight}
        rx="8"
      ></rect>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight}
        d="M124 120L124 176"
      ></path>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight}
        d="M84 120L84 176"
      ></path>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight}
        d="M124 148a28 28 0 0156 0v28"
      ></path>
      <circle fill={color} cx="84" cy="80" r="16"></circle>
    </svg>
  );
};
