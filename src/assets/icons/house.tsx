import { IconProperties } from "@/types";
import { FC } from "react";

export const HouseIcon: FC<IconProperties> = ({
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
        d="M152 208v-48a8 8 0 00-8-8h-32a8 8 0 00-8 8v48a8 8 0 01-8 8H48a8 8 0 01-8-8v-92.5a8.3 8.3 0 012.6-5.9l80-72.7a8 8 0 0110.8 0l80 72.7a8.3 8.3 0 012.6 5.9V208a8 8 0 01-8 8h-48a8 8 0 01-8-8z"
      ></path>
    </svg>
  );
};
