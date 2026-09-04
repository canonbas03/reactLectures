import { useRef } from "react";
import { ProjectType } from "./Project";

type AddProjectProps = {
  handleSelected: (value: null | number) => void;
  handleAdd: (project: ProjectType) => void;
  handleCancel: () => void;
};
export default function AddProject({
  handleSelected,
  handleAdd,
  handleCancel,
}: AddProjectProps) {
  const project: ProjectType = { id: 0, title: "", description: "", date: 0 };
  const titleInput = useRef<HTMLInputElement>(null);
  const descriptionTa = useRef<HTMLTextAreaElement>(null);
  const dateInput = useRef<HTMLInputElement>(null);

  function getProject(): ProjectType {
    if (titleInput.current && descriptionTa.current && dateInput.current) {
      return {
        id: Date.now(),
        title: titleInput.current.value,
        description: descriptionTa.current.value,
        date: Number(dateInput.current.value),
      };
    }
    return { id: 0, title: "", description: "", date: 0 };
  }
  return (
    <>
      <button onClick={handleCancel}>Cancel</button>
      <button onClick={() => handleAdd(getProject())}>Save</button>

      <label className="capitalize">Title</label>
      <input ref={titleInput} type="text" />

      <label>Description</label>
      <textarea ref={descriptionTa} name="" id=""></textarea>

      <label>Due Date</label>
      <input ref={dateInput} type="date" />
    </>
  );
}
