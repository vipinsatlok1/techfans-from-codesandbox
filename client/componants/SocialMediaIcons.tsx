import { useSocialMedia } from "@/hooks/useSocialMedia";
import Link from "next/link";
import styles from "../styles/componants/socialMediaIcons.module.css";

export const SocialMediaIcons = ({
  username,
  text,
}: {
  text: string;
  username: string;
}) => {
  const socialData = useSocialMedia(username);
  return (
    <div className={styles.socialMediaIcons}>
      {text || ""}
      <div className={styles.iconsWrapper}>
        {socialData.map((item, i) => {
          return (
            <SingleSocialMedia key={i} link={item.link} Icon={item.Icon} />
          );
        })}
      </div>
    </div>
  );
};

interface Props {
  link?: any;
  Icon: any;
}
const SingleSocialMedia = ({ link, Icon }: Props) => {
  return (
    <Link href={link}>
      <Icon />
    </Link>
  );
};
