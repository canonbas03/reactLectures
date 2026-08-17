import { useState } from "react";
import MainWindow from "./components/MainWindow";
import SideWindow, { ProjectType } from "./components/SideWindow";
import AddProject from "./components/AddProject";

function App() {
  const [isAddNewProject, setIsAddNewProject] = useState(false);
  function showAddProject() {
    // maybe use ref for the modal
    setIsAddNewProject(true);
  }

  const [projects, setProjects] = useState<ProjectType[]>([]);

  function addNewProject(newProject: ProjectType) {
    setProjects((prev: ProjectType[]) => {
      return [...prev, newProject];
    });
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <div className="w-80">
        <SideWindow handleAddProject={showAddProject} projects={projects} />
      </div>
      <div className="flex-3">
        {!isAddNewProject ? (
          <MainWindow handleAddProject={showAddProject} />
        ) : (
          <AddProject handleAddProject={addNewProject} />
        )}
      </div>
    </main>
  );
}

export default App;
