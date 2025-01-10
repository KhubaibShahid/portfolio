import Card from "./card";
import { IoLogoJavascript as Js } from "react-icons/io";
import { FaHtml5 as Html } from "react-icons/fa";
import { FaCss3Alt as Css } from "react-icons/fa";
import { FaReact as ReactI } from "react-icons/fa";
import { RiNextjsFill as NextI } from "react-icons/ri";
import { RiTailwindCssFill as TailwindI } from "react-icons/ri";
import { IoLogoFirebase as FirebaseI } from "react-icons/io5";
import { FaGitAlt as GitI } from "react-icons/fa";
import { SiTypescript as Ts } from "react-icons/si";
import { FaSass as SassI } from "react-icons/fa";
import { SiRedux as ReduxI } from "react-icons/si";


export default function Expertise() {
    return (
        <div className="w-full px-10 my-20 py-10 flex flex-col justify-center bg-royal">
                <h2 className="text-center text-4xl font-bold my-10">MY EXPERTISE</h2>
                <div className="flex flex-col">
                  <p className="text-center text-lg gap-10 h-[100px]">
                  I specialize in crafting dynamic and user-friendly web applications with a focus on aesthetics and functionality.
                  </p>
                  <div className="flex flex-wrap justify-center items-center">
                    <Card type="html">
                      <Html className="icon w-full h-[50px]"></Html>
                    </Card>
                    <Card type="css">
                      <Css className="icon w-full h-[50px]"></Css>
                    </Card>
                    <Card type="js">
                      <Js className="icon w-full h-[50px]"></Js>
                    </Card>
                    <Card type="ts">
                      <Ts className="icon w-full h-[50px]"></Ts>
                    </Card>
                    <Card type="react">
                      <ReactI className="icon w-full h-[50px]"></ReactI>
                    </Card>
                    <Card type="next">
                      <NextI className="icon w-full h-[50px]"></NextI>
                    </Card>
                    <Card type="tailwind">
                      <TailwindI className="icon w-full h-[50px]"></TailwindI>
                    </Card>
                    <Card type="sass">
                      <SassI className="icon w-full h-[50px]"></SassI>
                    </Card>
                    <Card type="git">
                      <GitI className="icon w-full h-[50px]"></GitI>
                    </Card>
                    <Card type="redux">
                      <ReduxI className="icon w-full h-[50px]"></ReduxI>
                    </Card>
                    <Card type="firebase">
                      <FirebaseI className="icon w-full h-[50px]"></FirebaseI>
                    </Card>
                  </div>
                </div>
              </div>
    )
}