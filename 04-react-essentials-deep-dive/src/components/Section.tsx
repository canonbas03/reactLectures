import { ComponentPropsWithoutRef, ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"section">;
export default function Section({ title, children, ...props }: SectionProps) {
  return (
    <section {...props}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
