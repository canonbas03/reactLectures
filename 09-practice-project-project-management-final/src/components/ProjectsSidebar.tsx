import Button from "./elements/Button";
import { Project } from "./NewProject";
type ProjectsSidebarProps = {
  onStartAddProject: () => void;
  onSelectProject: (id: string) => void;
  selectedProjectId: string | null | undefined;
  projects: Project[];
};
export default function ProjectsSidebar({
  onStartAddProject,
  onSelectProject,
  selectedProjectId,
  projects,
}: ProjectsSidebarProps) {
  return (
    <aside className={asideStyle}>
      <h2 className={h2Style}>Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className={ulStyle}>
        {projects.map((project) => {
          let finalBtnStyle = btnStyle;
          if (project.id === selectedProjectId) {
            finalBtnStyle += btnSelectedStyleSnip;
          } else {
            finalBtnStyle += btnNotSelectedStyleSnip;
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={finalBtnStyle}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

const asideStyle =
  "w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl";
const h2Style = "mb-8 font-bold uppercase md:text-xl text-stone-200";
const btnStyle =
  "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
const btnSelectedStyleSnip = " bg-stone-800 text-stone-200";
const btnNotSelectedStyleSnip = " text-stone-400";
const ulStyle = "mt-8";
