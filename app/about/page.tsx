"use client"

import Image from "next/image";
import DEV from "../assests/developer.png";
import Expertise from "../components/expertise";
import ROUUND from "../assests/round.gif";
import { useRef } from "react";

export default function About() {

  const ref = useRef<HTMLImageElement | null>(null)

  function mouseHandler(e : React.MouseEvent) {
    const x = e.pageX / 50;
    const y = e.pageY / 50;
    ref.current ? ref.current.style.right = x + "px" : null
    ref.current ? ref.current.style.bottom = y + "px" : null
  }

  return (
    <div onMouseMove={(e) => mouseHandler(e)} className="about pt-12 relative bg-transparent overflow-hidden">
      <Image ref={ref} className="w-full pt-20 h-svh object-contain animated-img fixed -z-10" src={ROUUND} alt="round"></Image>
        <div className="flex ps-20 pb-20">
          <div className="w-1/2 flex flex-col justify-center gap-10 items-center">
            <h1 className="text-5xl font-bold self-start text-white">
              About my-self
            </h1>
            <p className="text-4xl">
              Hi, I'm <span className="text-[#35c0d8]">Khubaib Shahid</span>—a
              passionate front-end developer specializing in creating dynamic
              and visually stunning web applications.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className=" image-wrapper shine">
              <Image
                className="w-full h-full img"
                alt="developer"
                src={DEV}
              ></Image>
            </div>
          </div>
        </div>

        <div className="expertise">
            <Expertise></Expertise>
        </div>

        <div className="education">
            
        </div>
    </div>
  );
}
