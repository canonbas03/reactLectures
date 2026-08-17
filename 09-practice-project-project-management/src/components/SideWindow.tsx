import { useState } from "react";
import AddProjectButton from "./AddProjectButton";
type SideWindowProps = {
  handleAddProject: () => void;
  projects: ProjectType[];
};

export type ProjectType = {
  title: string;
  description: string;
  date: number;
};
export default function SideWindow({
  handleAddProject,
  projects,
}: SideWindowProps) {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          Your Projects
        </h2>
        <AddProjectButton
          text="+ Add project"
          handleAddProject={handleAddProject}
        ></AddProjectButton>
        <ul className="mt-8">
          {projects.map((project) => (
            <li className="flex justify-between my-4">
              <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">
                {" "}
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <main className="h-screen my-8 flex gap-8">lorem ipsum</main>
      <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
        lorem ipsum
      </button>
      <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
      <p className="flex flex-col gap-1 my-4">lorem ipsum</p>
      <label className="text-sm font-bold uppercase text-stone-500">
        lorem ipsum
      </label>
      <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        lorem ipsum
      </dialog>
      <form className="mt-4 text-right">lorem ipsum</form>
      <h2 className="text-xl font-bold text-stone-700 my-4">lorem ipsum</h2>
      <p className="text-stone-600 mb-4">lorem ipsum</p>
      <div className="w-[35rem] mt-16">lorem ipsum</div>
      <menu className="flex items-center justify-end gap-4 my-4">
        lorem ipsum
      </menu>
      <button className="text-stone-800 hover:text-stone-950">
        lorem ipsum
      </button>
      <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
        lorem ipsum
      </button>
      <div className="flex items-center gap-4">
        <p></p>
      </div>
      <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button className="text-stone-700 hover:text-stone-950">
        lorem ipsum
      </button>
      <div className="mt-24 text-center w-2/3">
        <p></p>
      </div>
      <img className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">lorem ipsum</h2>
      <p className="text-stone-400 mb-4">lorem ipsum</p>
      <p className="mt-8">lorem ipsum</p>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl"></aside>
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        lorem ipsum
      </h2>
      <ul className="mt-8">lorem ipsum</ul>
      <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">
        lorem ipsum
      </button>
      <div className="w-[35rem] mt-16">lorem ipsum</div>
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        lorem ipsum
      </header>
      <div className="flex items-center justify-between">lorem ipsum</div>
      <h1 className="text-3xl font-bold text-stone-600 mb-2">lorem ipsum</h1>
      <button className="text-stone-600 hover:text-stone-950">
        lorem ipsum
      </button>
      <p className="mb-4 text-stone-400">lorem ipsum</p>
      <p className="text-stone-600 whitespace-pre-wrap">lorem ipsum</p>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <p className="text-stone-800 my-4">lorem ipsum</p>
      <ul className="p-4 mt-8 rounded-md bg-stone-100">lorem ipsudm</ul>
      <li className="flex justify-between my-4">lorem ipsum</li>
      <button className="text-stone-700 hover:text-red-500">lorem ipsum</button>
    </>
  );
}
