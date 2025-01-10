"use client";

import Lottie from "react-lottie";
import animation from "./assests/Animation-1733439470989.json";
import { Btn } from "./components/button";
import ProgressBar from "./components/progressbar";
import ProjectCard from "./components/projectcard";
import PROJECT1 from "./assests/project-air.png";
import PROJECT2 from "./assests/project-gossip.png";
import Expertise from "./components/expertise";
import Link from "next/link";

export default function Home() {
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="main">
      <div className=" main">
        <div className="hero-section min-h-[80svh] w-full flex items-center md:items-start px-10 md:flex-row flex-col justify-center">
          <div className="md:w-1/2 md:my-28 pt-10">
            <h2 className="md:text-5xl sm:text-4xl text-3xl font-bold mb-5 flex">
              <div className="hover:-mt-5 transition-all duration-75 ease-linear">
                H
              </div>
              <div className="hover:-mt-5 transition-all duration-75 ease-linear">
                I
              </div>
              <div className="hover:-mt-5 transition-all duration-75 ease-linear">
                &nbsp;
              </div>
              <div className="hover:-mt-5 transition-all duration-75 ease-linear">
                I
              </div>
              <div className="hover:-mt-5 transition-all duration-75 ease-linear">
                &apos;
              </div>
              <div className="hover:-mt-5 transition-all duration-75 ease-linear">
                M
              </div>
              <div className="hover:-mt-5 transition-all duration-75 ease-linear">
                &nbsp;
              </div>
              <div className="hover:-mt-5 transition-all duration-75 ease-linear">
                K
              </div>
              <div className="hover:-mt-5 transition-all duration-75 ease-linear">
                H
              </div>
              <div className="hover:-mt-5 transition-all duration-75 ease-linear">
                U
              </div>
              <div className="hover:-mt-5 transition-all duration-75 ease-linear">
                B
              </div>
              <div className="hover:-mt-5 transition-all duration-75 ease-linear">
                A
              </div>
              <div className="hover:-mt-5 transition-all duration-75 ease-linear">
                I
              </div>
              <div className="hover:-mt-5 transition-all duration-75 ease-linear">
                B
              </div>
            </h2>
            <h3 className="md:text-3xl sm:text-2xl text-lg mb-5">
              FULL ENTHUSIASTIC FRONT-END DEVELOPER.
            </h3>
            <div className="md:flex gap-3 hidden ">
              <Link href="/contact">
                <Btn className="!rounded-[10px] px-5 font-medium text-lg">
                  Contact Me
                </Btn>
              </Link>
              <Link href="https://firebasestorage.googleapis.com/v0/b/project-1-e38c4.appspot.com/o/my-cv.pdf?alt=media&token=354a35f4-948d-4270-bb3d-2d8f2b9d37f9">
                <Btn className="!rounded-[10px] px-5 font-medium text-lg">
                  My Resume
                </Btn>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 md:h-[90svh] w-full sm:w-[70%] mb-5">
            <Lottie
              height={"100%"}
              width={"100%"}
              options={defaultOption}
            ></Lottie>
          </div>
          <div className="flex gap-3 md:hidden">
            <Btn>CONTACT ME</Btn>
            <Btn>MY RESUME</Btn>
          </div>
        </div>

        <div className="expertise">
          <Expertise></Expertise>
        </div>

        <div className="proficiency px-20 pb-20">
          <h2 className="text-5xl font-bold text-center mb-16">Skills</h2>
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-2xl mb-5">Front-End</h3>
              <ProgressBar status="65%"></ProgressBar>
            </div>
            <div>
              <h3 className="text-2xl mb-5">Back-End</h3>
              <ProgressBar status="40%"></ProgressBar>
            </div>
            <div>
              <h3 className="text-2xl mb-5">Programming</h3>
              <ProgressBar status="20%"></ProgressBar>
            </div>
          </div>
        </div>

        <div className="projects bg-black py-10">
          <h2 className="text-5xl font-bold text-center">Featured Projects</h2>
          <div className="project flex justify-around py-20">
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
          </div>
          <div className="flex justify-center">
            <div className="border-b w-fit border-b-white pb-5 text-2xl cursor-pointer hover:border-b-[#35c0d8] hover:text-[#35c0d8] transition-all duration-100 ease-linear">
              See more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
