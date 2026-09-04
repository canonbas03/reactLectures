import { useRef } from "react";
import Input from "./elements/Input";
import MessageModal, { MessageModalHandle } from "./elements/MessageModal";
export type Project = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
};

type NewProjectProps = {
  onAdd: (newProject: Project) => void;
  onCancel: () => void;
};

export default function NewProject({ onAdd, onCancel }: NewProjectProps) {
  const messageModalRef = useRef<MessageModalHandle>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descrRef = useRef<HTMLTextAreaElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);
  function handleSave() {
    if (titleRef.current && descrRef.current && dueDateRef.current) {
      const newProject: Project = {
        id: String(Date.now()),
        title: titleRef.current.value,
        description: descrRef.current.value,
        dueDate: dueDateRef.current.value,
      };
      if (!projectDataIsValid()) {
        if (messageModalRef.current) {
          messageModalRef.current.open();
        }
        return;
      }

      onAdd(newProject);
    }
    function projectDataIsValid() {
      if (titleRef.current && descrRef.current && dueDateRef.current) {
        return (
          titleRef.current.value.trim() != "" &&
          descrRef.current.value.trim() != "" &&
          dueDateRef.current.value.trim() != ""
        );
      }
    }
  }
  return (
    <>
      <MessageModal ref={messageModalRef} buttonText="Understood" />

      <div className={divAllStyle}>
        <menu className={menuStyle}>
          <li>
            <button onClick={onCancel} className={cancelBtnStyle}>
              Cancel
            </button>
          </li>
          <li>
            <button onClick={handleSave} className={saveBtnStyle}>
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} labelText="Title" />
          <Input ref={descrRef} labelText="Description" isTextarea />
          <Input ref={dueDateRef} labelText="Date" type="date" />
        </div>
      </div>
    </>
  );
}

const divAllStyle = "w-[35rem] mt-16";
const menuStyle = "flex items-center justify-end gap-4 my-4";
const cancelBtnStyle = "text-stone-800 hover:text-stone-950";
const saveBtnStyle =
  "px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950";
const h2Style = "text-xl font-bold text-stone-700 my-4";
const pStyle = "text-stone-600 mb-4";
