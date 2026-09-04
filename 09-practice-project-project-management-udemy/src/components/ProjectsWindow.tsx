import { ProjectType } from "./Project";

type ProjectsWindowProps = {
  allProjects: {
    selectedProjectId: number | null | undefined;
    projects: ProjectType[];
  };
  handleSelectProject: (value: null | number) => void;
};
export default function ProjectsWindow({
  allProjects,
  handleSelectProject,
}: ProjectsWindowProps) {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          Your Projects
        </h2>
        <button onClick={() => handleSelectProject(null)}>+ Add Project</button>
        <ul>
          {allProjects.projects.map((project) => (
            <li key={project.id}>
              <button onClick={() => handleSelectProject(project.id)}>
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
