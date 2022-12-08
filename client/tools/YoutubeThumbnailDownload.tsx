import styles from "../styles/componants/layout.module.css";
import { Button, Form, Input } from "@/componants";

export const YoutubeThumbnailDownload = () => {
  return (
    <div className={styles.tool}>
      <div className={styles.left}>
        <Form>
          <Input name="videoLink" placeholder="Enter youtube video link" />
          <Button text={"Downlaod thumbnail"} />
        </Form>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};
