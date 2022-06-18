import Image from "next/image";
import IconComponent from "../IconComponent/IconComponent";
import ProjectComponentUtil from "./ProjectComponentUtil";
import projectData from "./ProjectData";
export default function ProjectsComponent() {
  return (
    <>
      <div id="project-component" className="container-wrapper">
        <div className="p-10">
          <div className="text-center mb-4 font-quantico text-transparent bg-clip-text bg-gradient-to-l from-indigo-500 via-pink-500 to-purple-500">
            <h1 className="text-3xl sm:text-5xl md:text-7xltext-7xl">
              Projects
            </h1>
          </div>
          {projectData.map((item, idx) => (
            <ProjectComponentUtil
              key={item.projectName}
              item={item}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </>
  );
}
