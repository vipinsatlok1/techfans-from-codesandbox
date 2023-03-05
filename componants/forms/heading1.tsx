import styles from "../../styles/componants/form.module.css";

interface Props {
  text: any;
  Icon?: any;
}

const heading1 = ({ text, Icon }: Props) => {
  return (
    <h1 className={styles.h1}>
      {Icon && <Icon />} {text || "Heading"}
    </h1>
  );
};

export default heading1;
