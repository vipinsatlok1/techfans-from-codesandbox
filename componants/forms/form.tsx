import styles from "../../styles/componants/form.module.css"

interface Props {
  children: any;
}

const form = ({ children }: Props) => {
  return <form className={styles.form}>{children}</form>;
};

export default form;
