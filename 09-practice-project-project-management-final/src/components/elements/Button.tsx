import { ComponentPropsWithRef } from "react";

type ButtonProps = {
  children: React.ReactNode;
} & ComponentPropsWithRef<"button">;
export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button className={btnStyle} {...props}>
      {children}
    </button>
  );
}
const btnStyle =
  "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";
