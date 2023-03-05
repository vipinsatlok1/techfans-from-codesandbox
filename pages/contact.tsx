import {
  Button,
  Error,
  Heading1,
  Form,
  Input,
  Layout,
  SocialMediaIcons,
} from "@/componants";
import { useSocialMedia } from "@/hooks/useSocialMedia";
import { useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri";

const Contact = () => {
  const [input, setInput] = useState({ name: "", email: "", query: "" });
  const [errMsg, setErrorMsg] = useState("");

  const onChange = (name: string, value: any): any => {
    setInput({ ...input, [name]: value });
  };

  const onClick = () => {
    // check requiedetion
    if (!input.name) return setErrorMsg("name is required");
    if (!input.email) return setErrorMsg("email is required");
    if (!input.query) return setErrorMsg("query is required");

    setErrorMsg("");
  };

  return (
    <Layout>
      <Form>
        <Heading1 text="Contact us" />
        {errMsg && <Error text={errMsg} />}
        <Input
          onChange={onChange}
          placeholder="Enter your name"
          name="name"
          type="text"
        />
        <Input
          onChange={onChange}
          placeholder="Enter your email"
          name="email"
          type="email"
        />
        <Input
          onChange={onChange}
          placeholder="Enter your query"
          name="query"
          type="text"
        />
        <Button onClick={onClick} Icon={RiSendPlaneLine} text={"Send"} />
        <SocialMediaIcons username="vipinsatlok" text={"ask me here"} />
      </Form>
    </Layout>
  );
};

export default Contact;
