import { IconProperties } from "@/types";
import { FC } from "react";

export const OpenEmailIcon: FC<IconProperties> = ({
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
        d="M224 96v104a8 8 0 01-8 8H40a8 8 0 01-8-8V96l96-64z"
      ></path>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight}
        d="M110.5 152L34.5 205.7"
      ></path>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight}
        d="M221.5 205.7L145.5 152"
      ></path>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight}
        d="M224 96L145.5 152 110.5 152 32 96"
      ></path>
    </svg>
  );
};
