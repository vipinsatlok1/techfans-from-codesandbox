import styles from "../../styles/componants/form.module.css";

interface Props {
  children?: any;
  text?: string;
}

const paragraph2 = ({ children, text }: Props) => {
  return (
    <p className={styles.paragraph + " " + styles.short}>
      {children || text || "Paragraph short"}
    </p>
  );
};

export default paragraph2;
