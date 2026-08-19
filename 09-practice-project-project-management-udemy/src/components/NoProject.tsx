import noProjectsImg from "../assets/no-projects.png";
type NoProjectProps = {
  handleSelected: (value: null | number) => void;
};
export default function NoProject({ handleSelected }: NoProjectProps) {
  return (
    <>
      <img src={noProjectsImg} alt="empty list" className="w-16" />
      <h2>No project selected</h2>
      <p>Select a project or get started with a new one</p>
      <button onClick={() => handleSelected(null)}>Create a new project</button>
    </>
  );
}
