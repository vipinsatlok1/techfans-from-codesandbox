import { Logo, Round } from "@/public/svgs";
import { Button } from ".";

interface Props {
  data: {
    Icon1: any;
    Icon2: any;
    heading: string;
    paragraph: string;
    buttonText: string;
    path: string;
  };
}

const BoxWrapper = ({ data }: Props) => {
  const { Icon1, Icon2, heading, paragraph, buttonText, path } = data;

  return (
    <div className="box-wrapper">
      <div className="icons">
        <Icon1 />
        <Icon1 />
      </div>
      <div className="box">
        <div className="text">
          <h2>{heading}</h2>
          <p>{paragraph}</p>
        </div>
        <Button Icon={Icon2} text={buttonText} path={path} />
      </div>
    </div>
  );
};

const data = [
  {
    Icon1: Logo,
    Icon2: Logo,
    heading: "Tools",
    paragraph: "This is paragraph",
    buttonText: "button",
    path: "/tools",
  },
  {
    Icon1: Logo,
    Icon2: Logo,
    heading: "Blogs",
    paragraph: "This is paragraph",
    buttonText: "button",
    path: "/blogs",
  },
  {
    Icon1: Logo,
    Icon2: Logo,
    heading: "Projects",
    paragraph: "This is paragraph",
    buttonText: "button",
    path: "/projects",
  },
];

const toolSection = () => {
  return (
    <section className="hero section2">
      <Round />
      <div className="left">
        <div className="content">
          <Logo />
          <div className="text">
            <h1>Welcome Ji</h1>
            <p>Your Welcome Here my best friend</p>
          </div>
          <Button Icon={Logo} text="Login" path="/login" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          {data.map((item, i) => {
            return <BoxWrapper key={i} data={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default toolSection;
