import styles from "../../../styles/componants/cards.module.css";
import { Button, Paragraph1 } from "@/componants";
import { ICardBlog } from "@/types";
import { BiLike } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { AiFillEye } from "react-icons/ai";
import { useCardLike, useCardSave } from "@/hooks/useCard";

export const CardBlog = ({ data }: { data: ICardBlog }) => {
  const { title, src, like, category, _id, slug } = data;

  const likeHandler = () => useCardLike();
  const saveHandler = () => useCardSave("tool", { name: title, category, _id });

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img src={src} />
        <Paragraph1 text={title} />
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
        <Button varient="card" Icon={AiFillEye} path={slug} />
      </div>
    </div>
  );
};
