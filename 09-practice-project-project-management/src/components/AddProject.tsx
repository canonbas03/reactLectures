import { useRef } from "react";
import { ProjectType } from "./SideWindow";

type AddProjectProps = {
  handleAddProject: (projectObj: ProjectType) => void;
};
export default function AddProject({ handleAddProject }: AddProjectProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const descrRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const submitBtnRef = useRef<HTMLButtonElement>(null);

  function projectObject() {
    if (titleRef.current && descrRef.current && dateRef.current) {
      return {
        title: titleRef.current.value,
        description: descrRef.current.value,
        date: Number(dateRef.current.value),
      };
    }
    return {
      title: "no title",
      description: "no descr",
      date: 0,
    };
  }
  return (
    <div className="flex items-center justify-between">
      <form noValidate>
        <button>Cancel</button>
        <button
          ref={submitBtnRef}
          type="submit"
          onClick={() => handleAddProject(projectObject())}
        >
          Save
        </button>
        <br />
        <label className="text-sm font-bold uppercase text-stone-500">
          Title
        </label>
        <input ref={titleRef} type="text" />
        <br />
        <label className="text-sm font-bold uppercase text-stone-500">
          Description
        </label>
        <textarea ref={descrRef}></textarea>
        <br />
        <label className="text-sm font-bold uppercase text-stone-500">
          Due Date
        </label>
        <input ref={dateRef} type="date" />
      </form>
    </div>
  );
}
