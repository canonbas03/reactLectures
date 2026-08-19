import { useRef, useState } from "react";

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  date: number;
};
export type Task = {
  id: number;
  value: string;
};
type ProjectProps = {
  selectedProject: ProjectType;
  handleDel: (projectId: number) => void;
};
export default function Project({ selectedProject, handleDel }: ProjectProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  function addTask() {
    if (inputRef.current) {
      const newTask: Task = {
        id: Date.now(),
        value: inputRef.current.value,
      };
      if (newTask.value.trim() != "") {
        setTasks((prevTasks) => [...prevTasks, newTask]);
      }
    }
  }

  function clearTask(taskId: number) {
    // const filteredTasks = tasks.filter((task) => task.id != taskId);
    //if (filteredTasks) {
    setTasks((prevTasks) => [...prevTasks.filter((task) => task.id != taskId)]);
    //}
  }
  return (
    <>
      <h1>{selectedProject.title}</h1>
      <button onClick={() => handleDel(selectedProject.id)}>Delete</button>
      <p>{selectedProject.date}</p>
      <p>{selectedProject.description}</p>
      <h2>Tasks</h2>
      <input ref={inputRef} type="text" />
      <button onClick={() => addTask()}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li>
            {task.value}
            <button onClick={() => clearTask(task.id)}>Clear</button>
          </li>
        ))}
      </ul>
    </>
  );
}
