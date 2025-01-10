import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Card from "../components/card";


export default function ContactApp() {
  return (
    <div className="contact min-h-svh bg-wall py-10">
      <div className="main pt-10 flex flex-col h-1/2">
        <div className="mb-20">
          <h2 className="text-5xl text-center font-bold text-white">
            Contact Me
          </h2>
        </div>
        <div className="w-full justify-center mx-auto flex flex-col items-center flex-wrap gap-10">
        <div className="flex flex-col gap-5">
          <label className="text-xl" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="px-3 text-lg py-3 border border-white bg-transparent rounded-md"
          />
        </div>
        <div className="flex flex-col gap-5">
          <label className="text-xl" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="px-3 text-lg py-3 border border-white bg-transparent rounded-md"
          />
        </div>
        <div className="flex flex-col gap-5">
          <label className="text-xl" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            cols={22}
            className="px-3 resize-none text-lg py-3 border border-white bg-transparent rounded-md"
          ></textarea>
        </div>
        <button className="border border-white px-5 py-3 rounded-md hover:bg-white hover:text-black">Send</button>
        </div>
      </div>
      <div className="main pt-10 flex flex-col h-1/2">
        <div className="mb-20">
          <h2 className="text-5xl text-center font-bold text-white">
            Join Me
          </h2>
        </div>
        <div className="w-full mx-auto flex flex-col gap-20">
                <div className="social-media flex gap-5 justify-center items-center flex-wrap">
                                    <Card type="facebook">
                                    <FaFacebookF className="icon" />
                                    </Card>
                                    <Card type="instagram">
                                    <FaInstagram className="icon" />
                                    </Card>
                                    <Card type="linkedin">
                                    <FaLinkedinIn className="icon" />
                                    </Card>
                                    <Card type="twitter">
                                    <FaXTwitter className="icon" />
                                    </Card>
                                    <Card type="github">
                                    <FaGithub className="icon" />
                                    </Card>
                                    <Card type="tiktok">
                                    <FaTiktok className="icon" />
                                    </Card>
                                </div>
        </div>
      </div>
    </div>
  );
}
