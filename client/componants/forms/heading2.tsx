import styles from "../../styles/componants/form.module.css"

interface Props {
  text: any;
}

const heading2 = ({ text }: Props) => {
  return <h2 className={styles.h2}>{text || "Heading 2"}</h2>;
};

export default heading2;
