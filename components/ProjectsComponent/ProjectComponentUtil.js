import Image from "next/image";
import IconComponent from "../IconComponent/IconComponent";
import ReactMarkdown from "react-markdown";
export default function ProjectComponentUtil({ item, idx }) {
  return (
    <div className="mb-10">
      <div className="title text-center mb-6">
        <h1>{item.projectName}</h1>
      </div>
      <div
        className={`img-text-wrapper flex flex-col  lg:flex-row gap-2 ${
          idx % 2 === 0 ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="image-conatiner flex-1">
          <video
            autoPlay
            loop
            preload="auto"
            muted
            controls
            style={{ width: "700px", height: "500px", objectFit: "fill" }}
          >
            <source src={item.projectMedia} />
          </video>
        </div>
        <div className="text-conatiner flex-1">
          <div className="description">
            <ReactMarkdown children={item.projectDescription} />
          </div>
          <div className="links">
            {item.projectSource && (
              <a
                className="text-decoration-none mr-4"
                href={item.projectSource}
              >
                Source Code
              </a>
            )}
            {item.projectLive && (
              <a className="text-decoration-none" href={item.projectLive}>
                Live Project
              </a>
            )}
          </div>
          <div className="tags flex flex-wrap max-w-[100%] gap-6 mt-4">
            {item.projectTags.map((item) => (
              <div
                key={item.logoURL}
                className="group flex flex-col justify-between items-center gap-y-2"
              >
                <IconComponent item={item} />
                <p className=" tracking-widest opacity-[0] group-hover:opacity-100">
                  {item.logoNameProject}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
