import styles from "../../../styles/componants/cards.module.css";
import { Button, Heading1, Paragraph2, Svg } from "@/componants";
import { ICardTool } from "@/types";
import { BiLike } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { AiFillEye } from "react-icons/ai";
import { useCardLike, useCardSave } from "@/hooks/useCard";


export const CardTool = ({ data }: { data: ICardTool }) => {
  const { Icon, _id, category, title, like, paragraph, slug, svg } = data;

  const likeHandler = () => useCardLike();
  const saveHandler = () => useCardSave("tool", { name: title, category, _id });

  return (
    <div className={styles.card}>
      {svg && <Svg svg={svg} />}
      <div className={styles.content}>
        <Heading1 text={title} />
        <Paragraph2 text={paragraph} />
      </div>
      <div className={styles.buttons}>
        <div>
          <Button
            varient="card"
            onClick={likeHandler}
            Icon={BiLike}
            text={like}
          />
          <Button varient="card" onClick={saveHandler} Icon={FiHeart} />
        </div>
        <Button varient="card" Icon={AiFillEye} path={"/tools/" + slug} />
      </div>
    </div>
  );
};
