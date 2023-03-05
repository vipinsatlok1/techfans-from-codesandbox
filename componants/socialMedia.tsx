import Link from "next/link";

interface Props {
  link?: any;
  Icon: any;
}

const socialMedia = ({ link, Icon }: Props) => {
  return (
    <Link href={link}>
      <Icon />
    </Link>
  );
};

export default socialMedia;
