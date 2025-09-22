// variants/circleNumber.ts

import { tv } from "tailwind-variants";

export const circleNumber = tv({
    base: "inline-flex items-center justify-center border-2 rounded-full [&_>_*]:flex [&_>_*]:items-center [&_>_*]:justify-center  align-middle [&_>_*]:font-general-sans [&_>_*]:text-xl  xl:[&_>_*]:text-2xl [&_>_*]:font-semibold text-white [&_>_*]:leading-[-1%]",
    variants: {
      size: {
        sm: "h-6 w-6 text-sm",
        md: "lg:h-8 lg:w-8  h-8 w-8 text-base",
        lg: "h-14 w-14 text-xl",
      },
      borderColor: {
        lightPurple: "border-light-purple",
        lightGreen: "border-light-green",
        lightOrange: "border-light-orange",
      },
      bgColor: {
        none: "",
        lightPurple: "bg-light-purple",
        lightGreen: "bg-light-green",
        lightOrange: "bg-light-orange",
      },
    },
    defaultVariants: {
      size: "md",
      borderColor: "lightPurple",
      bgColor: "none",
    },
  });
  