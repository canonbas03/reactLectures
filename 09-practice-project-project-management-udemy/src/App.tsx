import { useState } from "react";
import ProjectsWindow from "./components/ProjectsWindow";
import AddProject from "./components/AddProject";
import NoProject from "./components/NoProject";
import Project, { ProjectType } from "./components/Project";

function App() {
  type ProjectStateType = {
    selectedProjectId: undefined | null | number;
    projects: ProjectType[];
  };
  const [projectsState, setProjectsState] = useState<ProjectStateType>({
    selectedProjectId: undefined,
    projects: [],
  });

  function addProject(newProject: ProjectType) {
    if (
      newProject.title === "" ||
      newProject.description === "" ||
      newProject.date === 0
    ) {
      return;
    }
    setProjectsState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, newProject],
    }));
  }

  function deleteProject(projectId: number) {
    setProjectsState((prevState) => ({
      ...prevState,
      projects: [
        ...prevState.projects.filter((project) => project.id != projectId),
      ],
      selectedProjectId: undefined,
    }));
  }

  function cancelAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleSelectProjectId(value: number | null = null) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: value,
    }));
  }
  let mainView: React.JSX.Element = (
    <>
      <p>Nothing</p>
    </>
  );
  if (projectsState.selectedProjectId === undefined) {
    mainView = <NoProject handleSelected={handleSelectProjectId} />;
  } else if (projectsState.selectedProjectId === null) {
    mainView = (
      <AddProject
        handleSelected={handleSelectProjectId}
        handleAdd={addProject}
        handleCancel={cancelAddProject}
      />
    );
  } else {
    const projectId = projectsState.selectedProjectId;
    const foundProject = projectsState.projects.find(
      (project) => project.id === projectId,
    );
    if (foundProject) {
      mainView = (
        <Project selectedProject={foundProject} handleDel={deleteProject} />
      );
    }
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <div className="w-80">
        <ProjectsWindow
          allProjects={projectsState}
          handleSelectProject={handleSelectProjectId}
        />
      </div>
      <div className="w-80">{mainView}</div>
    </main>
  );
}

export default App;
