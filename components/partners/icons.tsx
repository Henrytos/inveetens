import {
  CiFacebook,
  CiInstagram,
  CiLinkedin,
  CiTwitter,
  CiYoutube,
} from "react-icons/ci";
import {
  FaDiscord,
  FaGithub,
  FaTelegram,
  FaTiktok,
  FaTwitch,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

export function findByIcon(name: string) {
  switch (name) {
    case "instagram":
      return <CiInstagram className=" w-6 h-6" />;
    case "linkedin":
      return <CiLinkedin className=" w-6 h-6" />;
    case "github":
      return <FaGithub className=" w-6 h-6" />;
    case "twitter":
      return <CiTwitter className=" w-6 h-6" />;
    case "facebook":
      return <CiFacebook className=" w-6 h-6" />;
    case "youtube":
      return <CiYoutube className=" w-6 h-6" />;
    case "twitch":
      return <FaTwitch className=" w-6 h-6" />;
    case "tiktok":
      return <FaTiktok className=" w-6 h-6" />;
    case "discord":
      return <FaDiscord className=" w-6 h-6" />;
    case "whatsapp":
      return <FaWhatsapp className=" w-6 h-6" />;
    case "telegram":
      return <FaTelegram className=" w-6 h-6" />;
    case "email":
      return <MdOutlineEmail className=" w-6 h-6" />;

    default:
      return <IoIosSend className=" w-6 h-6" />;
  }
}
