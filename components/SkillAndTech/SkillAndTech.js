import Image from "next/image";
import IconComponent from "../IconComponent/IconComponent";
export default function SkillAndTech() {
  const iconData = [
    {
      logoURL: "/github.svg",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "Github Icon",
      logoName: "Github",
    },
    {
      logoURL: "/bootstrap.svg",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "Bootstrap Icon",
      logoName: "Bootstrap",
    },
    {
      logoURL: "/ejs.svg",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "EJS Icon",
      logoName: "EJS",
    },
    {
      logoURL: "/expressjs.png",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "Express Icon",
      logoName: "Express.js",
    },
    {
      logoURL: "/git.svg",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "Git Icon",
      logoName: "Git",
    },
    {
      logoURL: "/javascript.svg",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "Javascript Icon",
      logoName: "Javascript",
    },
    {
      logoURL: "/materialui.svg",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "MaterialUI Icon",
      logoName: "MaterialUI",
    },

    {
      logoURL: "/nextjs.svg",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "NextJS Icon",
      logoName: "Next.js",
    },
    {
      logoURL: "/nodejs.svg",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "NodeJS Icon",
      logoName: "Node.js",
    },
    {
      logoURL: "/react.png",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "ReactJS Icon",
      logoName: "React.js",
    },
    {
      logoURL: "/redux.svg",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "Redux Icon",
      logoName: "Redux",
    },
    {
      logoURL: "/socketio.svg",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "Socketio Icon",
      logoName: "Socket.IO",
    },
    {
      logoURL: "/tailwindcss.svg",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "Tailwind Icon",
      logoName: "TailwindCSS",
    },
    {
      logoURL: "/heroku.svg",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "Heroku Icon",
      logoName: "Heroku",
    },
    {
      logoURL: "/mongodb.svg",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "MongoDB Icon",
      logoName: "MongoDB",
    },
    {
      logoURL: "/firebase.svg",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "Firebase Icon",
      logoName: "Firebase",
    },
    {
      logoURL: "/react.png",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "React Native Icon",
      logoName: "React Native",
    },
    {
      logoURL: "/gunjs.svg",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "GunJS Icon",
      logoName: "GunJS",
    },
    {
      logoURL: "/python.svg",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "Python Icon",
      logoName: "Python",
    },
    {
      logoURL: "/cpp.svg",
      logoHeight: 80,
      logoWidth: 80,
      logoAlt: "CPP Icon",
      logoName: "C++",
    },
  ];
  return (
    <>
      <div
        id="skill-tech-component"
        className="wrapper-container flex justify-center lg:justify-between items-center p-16"
      >
        <div className="left-side-wrapper lg:flex-1 ">
          <div className="image-wrapper hidden lg:block ">
            <Image
              src="/skills.svg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="right-side-wrapper lg:flex-1">
          <div className="mb-8 text-center">
            <h1>My skills and tech</h1>
          </div>
          <div className="social-icons flex gap-x-10 flex flex-wrap max-w-[100%] justify-center">
            {iconData.map((item) => (
              <IconComponent key={item.logoName} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
