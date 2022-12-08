interface Props {
  text: string;
}

export const title1 = ({ text }: Props) => {
  return <h1>{text}</h1>;
};
