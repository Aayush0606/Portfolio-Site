import Image from "next/image";
import IconComponent from "../IconComponent/IconComponent";
import ReactMarkdown from "react-markdown";
export default function ProjectComponentUtil({ item, idx }) {
  return (
    <div className="mb-10">
      <div className="title text-center mb-6 font-quantico text-transparent bg-clip-text bg-gradient-to-l from-indigo-500  to-pink-500">
        <h1 className="text-3xl sm:text-5xl md:text-7xltext-7xl">
          {item.projectName}
        </h1>
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
            style={{ width: "700px", height: "450px", objectFit: "fill" }}
          >
            <source src={item.projectMedia} />
          </video>
        </div>
        <div className="text-conatiner flex-1">
          <div className="description text-base sm:text-xl md:text-3xl font-indie text-[#fadede]">
            <ReactMarkdown children={item.projectDescription} />
          </div>
          <div className="links">
            <a
              className="text-decoration-none mr-4 bg-[#fca5a5] p-2 rounded-xl font-quantico text-red-500 hover:bg-pink-400 hover:text-red-700"
              href={item.projectSource}
            >
              Source Code
            </a>
          </div>
          <div className="tags flex flex-wrap max-w-[100%] gap-6 mt-4">
            {item.projectTags.map((item) => (
              <div
                key={item.logoURL}
                className="group flex flex-col justify-between items-center gap-y-2"
              >
                <IconComponent item={item} />
                <p className=" tracking-widest text-red-500 opacity-[0] group-hover:opacity-100">
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
