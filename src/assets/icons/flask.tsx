import { IconProperties } from "@/types";
import { FC } from "react";

export const FlaskIcon: FC<IconProperties> = ({
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
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight}
        d="M104 32v61.8a8.4 8.4 0 01-1.1 4.1l-63.6 106a8 8 0 006.8 12.1h163.8a8 8 0 006.8-12.1l-63.6-106a8.4 8.4 0 01-1.1-4.1V32"
      ></path>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight}
        d="M88 32L168 32"
      ></path>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight}
        d="M62.6 165c11.8-8.7 32.1-13.6 65.4 3 35.7 17.9 56.5 10.8 67.9 1.1"
      ></path>
    </svg>
  );
};
