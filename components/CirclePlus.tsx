import { ForwardedRef, forwardRef, SVGAttributes } from "react";

const CirclePlus = forwardRef(
  (props: SVGAttributes<SVGElement>, ref: ForwardedRef<SVGSVGElement>) => {
    return (
      <svg
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        width="24"
        ref={ref}
        {...props}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    );
  }
);

export default CirclePlus;
