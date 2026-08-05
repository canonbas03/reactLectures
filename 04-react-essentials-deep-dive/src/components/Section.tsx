import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};
export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
