import styles from "../../styles/componants/form.module.css"

interface Props {
  text: any;
}

const paragraph1 = ({ text }: Props) => {
  return <p className={styles.paragraph}>{text || "Paragraph"}</p>;
};

export default paragraph1;
