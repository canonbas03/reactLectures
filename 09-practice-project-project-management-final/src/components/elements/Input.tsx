import { ComponentPropsWithRef } from "react";

type InputProps = {
  labelText: string;
  isTextarea?: false;
} & ComponentPropsWithRef<"input">;

type TextareaProps = {
  labelText: string;
  isTextarea: true;
} & ComponentPropsWithRef<"textarea">;

type Props = InputProps | TextareaProps;
export default function Input(props: Props) {
  if (props.isTextarea) {
    const { labelText, isTextarea, ...rest } = props;
    return (
      <p className={pStyle}>
        <label htmlFor="textarea-01" className={labelStyle}>
          {labelText}
        </label>
        <textarea
          name="ta"
          id="textarea-01"
          {...rest}
          className={textareaStyle}
        />
      </p>
    );
  }
  const { labelText, isTextarea, ...rest } = props;
  return (
    <p className={pStyle}>
      <label htmlFor="input-01" className={labelStyle}>
        {labelText}
      </label>
      <input id="input-01" {...rest} className={inputStyle} />
    </p>
  );
}

const pStyle = "flex flex-col gap-1 my-4";
const labelStyle = "text-sm font-bold uppercase text-stone-500";
const textareaStyle =
  "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
const inputStyle = textareaStyle;
