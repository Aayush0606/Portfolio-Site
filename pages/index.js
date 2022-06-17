import Head from "next/head";
import AboutComponent from "../components/AboutComponent/AboutComponent";
import SkillAndTech from "../components/SkillAndTech/SkillAndTech";
import ContactComponent from "../components/ContactComponent/ContactComponent";
import ProjectsComponent from "../components/ProjectsComponent/ProjectsComponent";
export default function Home() {
  return (
    <>
      <Head>
        <title>Aayush Sharma</title>
      </Head>
      <AboutComponent />
      <SkillAndTech />
      <ProjectsComponent />
      <ContactComponent />
    </>
  );
}
