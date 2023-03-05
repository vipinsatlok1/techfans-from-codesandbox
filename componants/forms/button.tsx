import { useRouter } from "next/router";
import styles from "../../styles/componants/form.module.css";

interface Props {
  text?: any;
  Icon?: any;
  onClick?: () => {};
  path?: string;
  varient?: string;
}

const button = ({ varient, text, Icon, onClick, path }: Props) => {
  const router = useRouter();

  const classNameParent = styles.button;
  const className = varient ? styles[varient] : "";
  const handler = (e: any) => {
    e.preventDefault();
    if (onClick) return onClick();
    if (path) return router.push(path);
  };

  return (
    <button onClick={handler} className={classNameParent + " " + className}>
      {Icon && <Icon />}
      {text || ""}
    </button>
  );
};

export default button;
