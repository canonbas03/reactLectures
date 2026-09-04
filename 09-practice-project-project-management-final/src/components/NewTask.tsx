import { ChangeEvent, useRef, useState } from "react";
import { Task } from "./Tasks";
import MessageModal, { MessageModalHandle } from "./elements/MessageModal";

type NewTaskProps = {
  onAdd: (newTask: Task) => void;
};
export default function NewTask({ onAdd }: NewTaskProps) {
  const [enteredTask, setEnteredTask] = useState<Task>({
    id: "",
    projectId: "",
    text: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setEnteredTask((prevState) => {
      return {
        ...prevState,
        text: event.target.value,
      };
    });
  }

  const modalRef = useRef<MessageModalHandle>(null);
  function handleClick() {
    if (enteredTask && enteredTask.text !== "") {
      enteredTask.id = String(Date.now());
      onAdd(enteredTask);
      setEnteredTask({
        id: "",
        projectId: "",
        text: "",
      });
    } else {
      modalRef.current?.open();
    }
  }
  return (
    <>
      <MessageModal ref={modalRef} buttonText="Sorry" />

      <div className={divStyle}>
        <input
          type="text"
          onChange={handleChange}
          value={enteredTask?.text}
          className={inputStyle}
        />
        <button onClick={handleClick} className={btnStyle}>
          Add Task
        </button>
      </div>
    </>
  );
}

const divStyle = "flex items-center gap-4";
const inputStyle = "w-64 px-2 py-1 rounded-sm bg-stone-200";
const btnStyle = "text-stone-700 hover:text-red-950";
