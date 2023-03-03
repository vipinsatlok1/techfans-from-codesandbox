import styles from "../../styles/componants/layout.module.css";

export const Layout = ({ children }: { children: any }) => {
  return <section className={styles.layout}>{children}</section>;
};
