import { Button } from "..";

interface Props {
  data: {
    Icon: any;
    ButtonIcon: any;
    heading: string;
    paragraph: string;
    buttonText: string;
    path: string;
  };
}

const AdCard = ({ data }: Props) => {
  const { Icon, ButtonIcon, heading, paragraph, buttonText, path } = data;

  return (
    <div className="card adCard">
      <div className="icons">
        <Icon />
        <Icon />
      </div>
      <div className="box">
        <div className="text">
          <h2>{heading}</h2>
          <p>{paragraph}</p>
        </div>
        <Button Icon={ButtonIcon} text={buttonText} path={path} />
      </div>
    </div>
  );
};

export default AdCard;
