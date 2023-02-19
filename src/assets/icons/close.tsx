import { IconProperties } from "@/types";
import { FC } from "react";

export const CloseIcon: FC<IconProperties> = ({
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
        d="M200 56L56 200"
      ></path>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight}
        d="M200 200L56 56"
      ></path>
    </svg>
  );
};
