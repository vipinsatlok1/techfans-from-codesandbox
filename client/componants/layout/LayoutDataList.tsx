import styles from "../../styles/componants/layout.module.css";

export const LayoutDataList = ({ Card, data }) => {
  return (
    <div className={styles.layoutDataList}>
      {data?.map((item, i) => {
        return <Card key={i} data={item} />;
      })}
    </div>
  );
};
