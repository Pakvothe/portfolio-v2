import { IconProperties } from "@/types";
import { FC } from "react";

export const GithubIcon: FC<IconProperties> = ({
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
        d="M84 240a23.9 23.9 0 0024-24v-48M172 240a23.9 23.9 0 01-24-24v-48M152 168h16a23.9 23.9 0 0124 24v8a23.9 23.9 0 0024 24M104 168H88a23.9 23.9 0 00-24 24v8a23.9 23.9 0 01-24 24"
      ></path>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight}
        d="M111.8 64A52 52 0 0068 40a52 52 0 00-3.5 44.7A49.3 49.3 0 0056 112v8a48 48 0 0048 48h48a48 48 0 0048-48v-8a49.3 49.3 0 00-8.5-27.3A52 52 0 00188 40a52 52 0 00-43.8 24z"
      ></path>
    </svg>
  );
};
