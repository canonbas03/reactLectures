import NewTask from "./NewTask";
export type Task = {
  id: string;
  projectId: string;
  text: string;
};
type TasksProps = {
  tasks: Task[];
  onAdd: (newTask: Task) => void;
  onDelete: (taskId: string) => void;
};
export default function Tasks({ tasks, onAdd, onDelete }: TasksProps) {
  return (
    <section>
      <h2 className={h2Style}>Tasks</h2>
      <NewTask onAdd={onAdd} />

      {tasks.length === 0 && (
        <p className={pStyle}>This project has no tasks yet</p>
      )}

      {tasks.length > 0 && (
        <ul className={ulStyle}>
          {tasks.map((task) => (
            <li key={task.id} className={liStyle}>
              <span>{task.text}</span>
              <button onClick={() => onDelete(task.id)} className={btnStyle}>
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

const h2Style = "text-2xl font-bold text-stone-700 mb-4";
const pStyle = "text-stone-800 my-4";
const ulStyle = "p-4 mt-8 rounded-md bg-stone-100";
const liStyle = "flex justify-between my-4";
const btnStyle = "text-stone-700 hover:text-red-500";
