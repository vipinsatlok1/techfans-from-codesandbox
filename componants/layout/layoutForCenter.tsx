import styles from "../../styles/componants/layout.module.css";

const layoutForCenter = ({ children }: { children: any }) => {
  return <section className={styles.layoutForCenter}>{children}</section>;
};

export default layoutForCenter;
