import { Project } from "./NewProject";
import Tasks, { Task } from "./Tasks";
type SelectedProjectProps = {
  project: Project;
  tasks: Task[];
  onDelete: (projId: string) => void;
  onAddTask: (newTask: Task) => void;
  onDeleteTask: (taskId: string) => void;
};
export default function SelectedProject({
  project,
  tasks,
  onDelete,
  onAddTask,
  onDeleteTask,
}: SelectedProjectProps) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("bg-BG", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  return (
    <div className={divStyle}>
      <header className={headerStyle}>
        <div className={divTitleStyle}>
          <h1 className={h1Style}>{project.title}</h1>
          <button onClick={() => onDelete(project.id)} className={btnStyle}>
            Delete
          </button>
        </div>
        <p className={datePStyle}>{formattedDate}</p>
        <p className={projectDescrPStyle}>{project.description}</p>
      </header>
      <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </div>
  );
}

const divStyle = "w-[35rem] mt-16";
const headerStyle = "pb-4 mb-4 border-b-2 border-stone-300";
const divTitleStyle = "flex items-center justify-between";
const h1Style = "text-3xl font-bold text-stone-600 mb-2";
const btnStyle = "text-stone-600 hover:text-stone-950";
const datePStyle = "mb-4 text-stone-400";
const projectDescrPStyle = "text-stone-600 whitespace-pre-wrap";
