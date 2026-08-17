import { useRef, useState } from "react";
import { ProjectType } from "./SideWindow";

type ProjectModalProps = {
  project: ProjectType;
};
export default function ProjectModal({ project }: ProjectModalProps) {
  const [tasks, setTasks] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  function handleTaskAddition() {
    const inputVal = inputRef.current?.value;
    if (inputVal) {
      setTasks((prevTasks) => {
        return [...prevTasks, inputVal];
      });
    }
  }

  return (
    <>
      <h1>{project.title}</h1>
      <button>Delete</button>
      <p>Date: {project.date}</p>
      <p>{project.description}</p>
      <p>--------------</p>
      <h2>Tasks</h2>
      <input type="text"></input>
      <button onClick={() => handleTaskAddition()}>Add</button>
      <ul>
        <li>
          {tasks.map((task) => (
            <div>
              {" "}
              <p>{task}</p>
              <button>Clear</button>
            </div>
          ))}
        </li>
      </ul>
    </>
  );
}
