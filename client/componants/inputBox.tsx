import styles from "../styles/componants/form.module.css";
import { useState } from "react";

interface Props {
  name: string;
  placeholder: string;
  type?: string;
  onChange: (name: string, value: any) => {};
  value?: any;
  varient?: string;
}

const input = ({
  varient,
  onChange,
  name,
  type,
  placeholder,
  value,
}: Props) => {
  const [input, setInput] = useState(value || "");

  const handler = (e: any) => {
    setInput(e.target.value);
    onChange && onChange(e.target.name, e.target.value);
  };

  return (
    <input
      className={styles.input + " " + styles[varient as string]}
      type={type || "text"}
      placeholder={placeholder || "Search here..."}
      name={name}
      value={input}
      onChange={handler}
    />
  );
};
export default input;
