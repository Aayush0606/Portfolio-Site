import Image from "next/image";
import IconComponent from "../IconComponent/IconComponent";
const AboutComponent = () => {
  const iconData = [
    {
      logoURL: "/github.svg",
      logoHeight: 50,
      logoWidth: 50,
      logoAlt: "Github Icon",
      connectUrl: "https://github.com/Aayush0606",
    },
    {
      logoURL: "/gmail.svg",
      logoHeight: 50,
      logoWidth: 50,
      logoAlt: "Gmail Icon",
      connectUrl: "mailto:aayushsharma0909@gmail.com",
    },
    {
      logoURL: "/linkedin.svg",
      logoHeight: 50,
      logoWidth: 50,
      logoAlt: "Linkedin Icon",
      connectUrl: "https://www.linkedin.com/in/aayush-sharma-344497216/",
    },
  ];

  return (
    <>
      <div
        id="about-component"
        className="wrapper-container flex justify-center lg:justify-between p-16 "
      >
        <div className="left-side-wrapper lg:flex-1">
          <div className="heading">
            <h1 className="font-quantico text-3xl sm:text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-l from-indigo-500 via-pink-500 to-purple-500">
              Hi, I'm Aayush
            </h1>
          </div>
          <div className="middle">
            <h3 className="font-quantico text-xl sm:text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-l from-indigo-500 via-pink-500 to-purple-500">
              A fullstack developer
            </h3>
          </div>
          <div className="end">
            <p className="font-indie text-base sm:text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-l from-indigo-500  to-pink-500">
              I enjoy solving complex problems. Frequently praised as
              detail-oriented by my peers, I can be relied upon to help your
              company achieve its goals by providing sustainable and scalable
              solutions
            </p>
          </div>
          <div className="social-icons flex gap-x-10">
            {iconData.map((item) => (
              <a
                target="blank"
                href={item.connectUrl}
                key={item.logoURL}
                className="text-decoration-none"
              >
                <IconComponent item={item} />
              </a>
            ))}
          </div>
        </div>
        <div className="right-side-wrapper lg:flex-1 ">
          <div className="image-wrapper hidden lg:block ">
            <Image
              src="/developer.svg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutComponent;
