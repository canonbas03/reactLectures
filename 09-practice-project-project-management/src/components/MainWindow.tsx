import noProjectImg from "../assets/no-projects.png";
import AddProjectButton from "./AddProjectButton";
type MainWindowProps = {
  handleAddProject: () => void;
};
export default function MainWindow({ handleAddProject }: MainWindowProps) {
  return (
    <>
      <img
        src={noProjectImg}
        alt=""
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-700 my-4">
        No project selected
      </h2>
      <p>Select a project or get started with a new one</p>
      <AddProjectButton
        handleAddProject={handleAddProject}
        text="Create new project"
      />
    </>
  );
}
