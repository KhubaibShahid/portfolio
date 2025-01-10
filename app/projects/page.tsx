import Image from "next/image";
import MOTION from "../assests/motion.gif";
import ProjectCard from "../components/projectcard";
import PROJECT1 from "../assests/project-air.png";
import PROJECT2 from "../assests/project-gossip.png";
import PROJECT3 from "../assests/project-food.png";
import PROJECT4 from "../assests/project-pokemon.png";
import PROJECT5 from "../assests/project-resume.png";
import PROJECT6 from "../assests/project-stopwatch.png";
import PROJECT7 from "../assests/project-blog.png";

export default function ProjectsApp() {
  return (
    <div className="projectspage w-full min-h-svh relative">
      <Image
        className="fixed object-contain w-full top-10 h-svh -z-10"
        src={MOTION}
        alt="motion"
      ></Image>
      <div className="main pt-10">
        <div className="w-full">
          <h2 className="text-5xl font-bold text-center">Projects</h2>
        </div>
        <div className="all-projects flex py-20 px-3 justify-center gap-20 flex-wrap">
          <ProjectCard
            link="https://stellar-dodol-8f89e5.netlify.app/"
            img={PROJECT1}
            title="Air for share clone"
            des="data share app in which you can share your text or file based data through same IP Address"
          ></ProjectCard>
          <ProjectCard
            link="https://my-gossip-app.netlify.app/chat"
            img={PROJECT2}
            title="Gossip Chat App"
            des="chatapp like whatsapp , telegram etx in which you can chat with anyone freely"
          ></ProjectCard>
          <ProjectCard
            link="https://food-app-kohl-alpha.vercel.app/"
            img={PROJECT3}
            title="Food Link"
            des="simple food app with admin panel and user authentication"
          ></ProjectCard>
          <ProjectCard
            link="https://extraordinary-bubblegum-285da7.netlify.app/"
            img={PROJECT4}
            title="Pokemon Search App"
            des="pokemon search app one of my free code camp in which i fetching data and render on ui"
          ></ProjectCard>
          <ProjectCard
            link="https://resume-builder-seven-tau.vercel.app/"
            img={PROJECT5}
            title="Resume Builder"
            des="simple resume builder in which you can easily create your by selecting template and fill given input then you can download your resume or share it with others"
          ></ProjectCard>
          <ProjectCard
            link="https://wonderful-entremet-f465fe.netlify.app/"
            img={PROJECT6}
            title="Stopwatch"
            des="Stopwatch and countdown timer easy to use"
          ></ProjectCard>
          <ProjectCard
            link="https://blog-app-iota-murex.vercel.app/"
            img={PROJECT7}
            title="Blog App"
            des="personal blog app with sanity"
          ></ProjectCard>
        </div>
      </div>
    </div>
  );
}
