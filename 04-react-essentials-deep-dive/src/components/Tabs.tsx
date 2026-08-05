import { ElementType, ReactNode } from "react";

type TabsProps = {
  children: ReactNode;
  buttons: ReactNode;
  ButtonsContainer?: ElementType;
};
export default function Tabs({
  children,
  ButtonsContainer = "menu",
  buttons,
}: TabsProps) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
