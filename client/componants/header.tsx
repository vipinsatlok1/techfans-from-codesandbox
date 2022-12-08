import { Close, Logo } from "@/public/svgs";
import styles from "../styles/componants/header.module.css";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineHandyman } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import { MdFolderOpen } from "react-icons/md";
import { MdSubject } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { MdClear } from "react-icons/md";

const header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className={styles.header}>
      {!isActive ? (
        <MdMenu
          className={styles.menuIcon}
          onClick={() => setIsActive(!isActive)}
        />
      ) : (
        <MdClear
          className={styles.menuIcon}
          onClick={() => setIsActive(!isActive)}
        />
      )}

      {/* left side */}
      <Link href={"/"} className={styles.left}>
        <Logo />
        Tech Fans
      </Link>

      {/* right side */}
      <div
        className={isActive ? styles.active + " " + styles.right : styles.right}
      >
        <HeaderBox
          onClick={() => setIsActive(!isActive)}
          Icon={MdSubject}
          text="Blogs"
          path="blogs"
        />
        <HeaderBox
          onClick={() => setIsActive(!isActive)}
          Icon={MdOutlineHandyman}
          text="Tools"
          path="tools"
        />
        <HeaderBox
          onClick={() => setIsActive(!isActive)}
          Icon={MdFolderOpen}
          text="Projects"
          path="projects"
        />
        <HeaderBox
          onClick={() => setIsActive(!isActive)}
          Icon={MdCall}
          text="Contact Us"
          path="contact"
        />
        <HeaderBox
          onClick={() => setIsActive(!isActive)}
          Icon={MdOutlinePersonOutline}
          text="About Us"
          path="about"
        />
        <HeaderBox
          onClick={() => setIsActive(!isActive)}
          Icon={MdLogin}
          text="Login"
          path="login"
        />
      </div>
    </header>
  );
};

const HeaderBox = ({
  text,
  path,
  Icon,
  onClick,
}: {
  text: string;
  path: string;
  Icon: any;
  onClick: () => {};
}) => {
  return (
    <Link onClick={onClick} href={"/" + path} className={styles.headerBox}>
      <Icon />
      {text}
    </Link>
  );
};

export default header;
