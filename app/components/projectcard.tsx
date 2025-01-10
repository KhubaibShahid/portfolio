"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";
import { Btn } from "./button";
import Link from "next/link";

export default function ProjectCard({title, des, img, link} : {title: string, des: string, img?: StaticImageData, link : string}) {
  return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#181818] dark:border-gray-700 text-start">
      <a href="#">
        <Image
          className="rounded-t-lg"
          src={img as StaticImageData}
          alt=""
        />
      </a>
      <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {des}
        </p>
        <Link href={link}>
        <Btn className="w-[120px] h-[20px] flex items-center bg-gray-800 font-medium justify-center !rounded-[5px]">
          Visit Site
        </Btn>
        </Link>
      </div>
      </div>
  );
}
