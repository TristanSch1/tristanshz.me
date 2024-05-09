import { SVGProps } from "react";

export const ArrowDown = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.00001 16.172L2.92901 10.101L1.51501 11.515L10 20L10.707 19.293L18.485 11.515L17.071 10.101L11 16.172V0H9.00001V16.172Z"
        fill="black"
      />
    </svg>
  );
};
