import styles from "../../styles/componants/layout.module.css";
import { BsEmojiAngry } from "react-icons/bs";
import { BsEmojiFrown } from "react-icons/bs";
import { BsEmojiNeutral } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiLaughing } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { Button, Heading1, Heading2, Paragraph1, Paragraph2 } from "..";
import { BiLike } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { LayoutFeedback } from "./LayoutFeedback";

// BsEmojiAngry
export const LayoutTool = ({ children }: { children: any }) => {
  return (
    <div className={styles.layoutTool}>
      {children}
      <LayoutFeedback like={4343} link="httpsLtwitter" />
    </div>
  );
};
