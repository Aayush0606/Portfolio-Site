import Image from "next/image";
import IconComponent from "../IconComponent/IconComponent";
import ProjectComponentUtil from "./ProjectComponentUtil";
import projectData from "./ProjectData";
export default function ProjectsComponent() {
  return (
    <>
      <div id="project-component" className="container-wrapper">
        <div className="p-10">
          <div className="text-center mb-4">
            <h1>Projects</h1>
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
