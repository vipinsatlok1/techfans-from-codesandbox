import { Button, Heading1, Paragraph1 } from "@/componants";
import styles from "../../../styles/componants/layout.module.css";

interface Props {
  Icon: any;
  title: string;
  dec: string;
  path: string;
  button: {
    text: string;
    ButtonIcon: any;
  };
}

export const CardHomeAd = ({ data }: { data: Props }) => {
  const { Icon, title, dec, path } = data;
  const { text, ButtonIcon } = data.button;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.icons}>
        <Icon />
        <Icon />
      </div>
      <div className={styles.card}>
        <div className={styles.title}>
          <Heading1 text={title} />
          <Paragraph1 text={dec} />
        </div>
        <Button path={path} varient="card" Icon={ButtonIcon} text={text} />
      </div>
    </div>
  );
};
