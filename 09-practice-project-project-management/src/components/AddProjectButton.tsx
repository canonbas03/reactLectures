type AddProjectButtonProps = {
  handleAddProject: () => void;
  text: string;
};
export default function AddProjectButton({
  text,
  handleAddProject,
}: AddProjectButtonProps) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      onClick={handleAddProject}
    >
      {text}
    </button>
  );
}
