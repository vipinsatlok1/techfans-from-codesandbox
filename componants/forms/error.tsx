import styles from "../../styles/componants/form.module.css"

interface Props {
  text: any;
}

const error = ({ text }: Props) => {
  return <p className={styles.error}>{text || "error found"}</p>;
};

export default error;
