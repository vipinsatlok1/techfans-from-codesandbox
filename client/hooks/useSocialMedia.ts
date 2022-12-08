import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

export const useSocialMedia = (username: string) => {
  return [
    {
      link: "https://facebook.com/" + username,
      Icon: FaFacebookF,
    },
    {
      link: "https://twitter.com/" + username,
      Icon: FaTwitter,
    },
    {
      link: "https://github.com/" + username,
      Icon: FaGithub,
    },
    {
      link: "https://instagram.com/" + username,
      Icon: FaInstagram,
    },
    {
      link: "https://likendin.com/in/" + username,
      Icon: FaLinkedinIn,
    },
    {
      link: "https://youtube.com/@" + username,
      Icon: FaYoutube,
    },
    {
      link: "https://t.me/" + username,
      Icon: FaTelegramPlane,
    },
    {
      link: "https://in.pinterest.com/" + username,
      Icon: FaPinterestP,
    },
  ];
};
