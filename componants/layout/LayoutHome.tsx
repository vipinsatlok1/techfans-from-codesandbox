import React from "react";
import styles from "../../styles/componants/layout.module.css";
import { Button, Heading1, Paragraph1 } from "..";

interface LeftSide {
  Icon: any;
  title: string;
  dec: string;
  path: string;
  button: {
    text: string;
    ButtonIcon: any;
  };
}

interface Props {
  side?: string;
  left: LeftSide;
  Card: any;
  cardData: LeftSide[];
}

const LayoutHome = ({ side, left, Card, cardData }: Props) => {
  const { Icon, title, dec, path } = left;
  const { text, ButtonIcon } = left.button;

  const classNameLeft = side ? styles[side] : "";
  const className = styles.layoutHomeWrapper + " " + classNameLeft;

  return (
    <div className={className}>
      <div className={styles.layoutHome}>
        <div className={styles.left}>
          <div className={styles.wrapper}>
            <Icon />
            <div className={styles.title}>
              <Heading1 text={title} />
              <Paragraph1 text={dec} />
            </div>
            <Button path={path} Icon={ButtonIcon} varient="card" text={text} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            {cardData.map((item, i) => {
              return <Card key={i} data={item} />;
            })}
          </div>
        </div>
      </div>
      <div className="layoutHome"></div>
    </div>
  );
};

export default LayoutHome;
