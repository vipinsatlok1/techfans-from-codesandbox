import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// import { FaTelegramPlane } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const data = {
  Icon: FaGithub,
  service: "Tools",
  categoryLists: [
    {
      name: "Google Sheet",
      Icon: FaYoutube,
      total: 343,
    },
    {
      name: "Google Sheet",
      Icon: FaYoutube,
      total: 343,
    },
    {
      name: "Google Sheet",
      Icon: FaYoutube,
      total: 343,
    },
  ],
};

const footer = () => {
  return (
    <footer className="footer">
      <div className="top">
        <Box data={data} />
        <Box data={data} />
        <Box data={data} />
      </div>
      <div className="bottom">
        <div className="copyright">
          <Link href={"/"}>Tech Fans</Link> Copyright 2023 (All Rights Reserved)
        </div>
        <div className="social-media">
          Join with me
          <div className="icons">
            <Link href={"#"}>
              <FaFacebookF />
            </Link>
            <Link href={"#"}>
              <FaInstagram />
            </Link>
            <Link href={"#"}>
              <FaGithub />
            </Link>
            <Link href={"#"}>
              <FaTwitter />
            </Link>
            <Link href={"#"}>
              <FaYoutube />
            </Link>
            <Link href={"#"}>
              <FaPinterestP />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface BoxProps {
  data: {
    Icon: any;
    service: string;
    categoryLists: Props[];
  };
}

const Box = ({ data }: BoxProps) => {
  const { service, Icon, categoryLists } = data;
  return (
    <div className="box">
      <div className="title">
        <Icon />
        {service}
      </div>
      <div className="lists">
        {categoryLists.map((item, i) => {
          return <List key={i} data={item} />;
        })}
      </div>
    </div>
  );
};

interface Props {
  name: string;
  Icon: any;
  total: number;
}

const List = ({ data }: { data: Props }) => {
  const { name, Icon, total } = data;

  return (
    <div className="list">
      <div className="left">
        <Icon />
        {name}
      </div>
      <div className="right">{total}</div>
    </div>
  );
};

export default footer;
