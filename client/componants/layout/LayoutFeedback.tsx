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

interface Props {
    like: number
    link: string
}

export const LayoutFeedback = ({ like, link }: Props) => {
    return (
        <div className={styles.feedback}>
            <div className={styles.react}>
                <div className={styles.likeAndSave}>
                    <Button text={like} varient="card" Icon={BiLike} />
                    <Button varient="card" Icon={FiHeart} />
                </div>
                <div className={styles.rating}>
                    <Button varient="card" Icon={BsEmojiAngry} />
                    <Button varient="card" Icon={BsEmojiFrown} />
                    <Button varient="card" Icon={BsEmojiNeutral} />
                    <Button varient="card" Icon={BsEmojiSmile} />
                    <Button varient="card" Icon={BsEmojiLaughing} />
                </div>
            </div>
            <div className={styles.shareWrapper}>
                <Paragraph2>
                    Share on
                    <div className={styles.icons}>
                        <Button varient="card" Icon={FaFacebookF} />
                        <Button varient="card" Icon={FaInstagram} />
                        <Button varient="card" Icon={FaLinkedinIn} />
                        <Button varient="card" Icon={FaTwitter} />
                        <Button varient="card" Icon={FaTelegramPlane} />
                        <Button varient="card" Icon={FaWhatsapp} />
                        <Button varient="card" Icon={FaPinterestP} />
                    </div>
                </Paragraph2>
                <div className={styles.link}>
                    <Button text={"Copy link"} /> {link}
                </div>
            </div>
            <div className={styles.thanks}>
                <Heading2 text={"Thanks for Visit this page and Use this Tool."} />
            </div>
        </div>
    )
}