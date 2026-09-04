import { log } from "../../log.js";

type CounterOutputProps = {
  value: number;
};
export default function CounterOutput({ value }: CounterOutputProps) {
  log("<CounterOutput /> rendered", 2);

  const cssClass = value >= 0 ? "counter-output" : "counter-output negative";
  return <span className={cssClass}>{value}</span>;
}
