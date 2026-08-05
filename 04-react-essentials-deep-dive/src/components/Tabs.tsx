import { ReactNode } from "react";

type TabsProps = {
  children: ReactNode;
  buttons: ReactNode;
};
export default function Tabs({ children, buttons }: TabsProps) {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}
