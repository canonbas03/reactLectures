import { ElementType, ReactNode } from "react";

type TabsProps = {
  children: ReactNode;
  ButtonsContainer: ElementType;
  buttons: ReactNode;
};
export default function Tabs({
  children,
  ButtonsContainer,
  buttons,
}: TabsProps) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
