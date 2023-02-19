import { IconProperties } from "@/types";
import { FC } from "react";

export const UserIcon: FC<IconProperties> = ({
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
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight}
      ></circle>
      <circle
        cx="128"
        cy="120"
        r="40"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight}
      ></circle>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight}
        d="M63.8 199.4a72 72 0 01128.4 0"
      ></path>
    </svg>
  );
};
