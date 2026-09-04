import noProjectsImg from "../assets/no-projects.png";
import Button from "./elements/Button";
type NoProjectSelectedProps = {
  onStartAddProject: () => void;
};
export default function NoProjectSelected({
  onStartAddProject,
}: NoProjectSelectedProps) {
  return (
    <div className={divStyle}>
      <img src={noProjectsImg} alt="empty list" className={imgStyle} />
      <h2 className={h2Style}>No project selected</h2>
      <p className={pStyle}>Select a project or get started with a new one</p>
      <Button onClick={onStartAddProject}>Create a new project</Button>
    </div>
  );
}

const divStyle = "mt-24 text-center w-2/3";
const imgStyle = "w-16 h-16 object-contain mx-auto";
const h2Style = "text-xl font-bold text-stone-500 my-4";
const pStyle = "text-stone-400 mb-4";
