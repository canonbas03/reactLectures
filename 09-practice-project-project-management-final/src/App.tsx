import { useState } from "react";
import NewProject, { Project } from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";
import Tasks, { Task } from "./components/Tasks";

type ProjectsStateType = {
  selectedProjectId: string | null | undefined;
  projects: Project[];
  tasks: Task[];
};

function App() {
  const [projectsState, setProjectsState] = useState<ProjectsStateType>({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(newProject: Project) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(id: string) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject(projectId: string) {
    setProjectsState((prevState) => {
      const clearedProjects = prevState.projects.filter(
        (project) => project.id !== projectId,
      );
      const clearedTasks = prevState.tasks.filter(
        (task) => task.projectId !== prevState.selectedProjectId,
      );

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...clearedProjects],
        tasks: [...clearedTasks],
      };
    });
  }

  function handleAddTask(newTask: Task) {
    if (projectsState.selectedProjectId) {
      newTask.projectId = projectsState.selectedProjectId;
    }
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(taskId: string) {
    const clearedTasks = projectsState.tasks.filter(
      (task) => task.id !== taskId,
    );
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: [...clearedTasks],
      };
    });
  }

  let content;
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );
  if (selectedProject) {
    content = (
      <SelectedProject
        project={selectedProject}
        tasks={projectsState.tasks.filter(
          (task) => task.projectId === projectsState.selectedProjectId,
        )}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
    );
  }
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className={mainStyle}>
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}
const mainStyle = "h-screen my-8 flex gap-8";
export default App;
