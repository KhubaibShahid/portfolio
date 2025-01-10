import Image from "next/image";
import DEV from "../assests/developer.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" bg-gray-800 footer relative mt-20">
      <div className="box w-full min-h-[400px] flex items-center py-10 justify-around flex-wrap gap-14">
        <div className="profile flex flex-col gap-3 items-center justify-center">
          <Image
            className="w-20 h-20 rounded-full object-cover"
            src={DEV}
            alt="dev"
          ></Image>
          <h1 className="text-lg">Khubaib Shahid</h1>
        </div>

        <div className="flex gap-5 flex-col items-center">
            <h3 className="font-bold text-xl">Links</h3>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/projects"}>Projects</Link>
        </div>

        <div className="flex gap-5 flex-col items-center">
            <h3 className="font-bold text-xl">Contacts</h3>
          <div>+923132307240</div>
          <div>+923343465831</div>
          <div>Khubaibshahid606@gmail.com</div>
          <div></div>
        </div>

        <div className="social-media flex gap-5 justify-center items-center">
          <div className="bg-white text-black p-5 rounded-full">
            <FaFacebookF size={30} />
          </div>
          <div className="bg-white text-black p-5 rounded-full">
            <FaInstagram size={30} />
          </div>
          <div className="bg-white text-black p-5 rounded-full">
            <FaLinkedinIn size={30} />
          </div>
          <div className="bg-white text-black p-5 rounded-full">
            <FaXTwitter size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
