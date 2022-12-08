import Link from "next/link";
import { useState } from "react";
import { getUser, register, test } from "@/hooks/apiCall";
import { FaChevronUp } from "react-icons/fa";
import {
  Button,
  Error,
  Form,
  Heading1,
  Input,
  LayoutForCenter,
  Paragraph2,
} from "@/componants";

const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const [errMsg, setErrorMsg] = useState("");

  const handler = async (e: any) => {
    e.preventDefault();
    if (!input.name) return setErrorMsg("name is required");
    if (!input.email) return setErrorMsg("email is required");
    if (!input.number) return setErrorMsg("number is required");
    if (!input.password) return setErrorMsg("password is required");

    try {
      // const data = await register(input);
      const data = await test();
      // const data = await getUser(input);
      setErrorMsg("");
      console.log(data);
    } catch (err) {
      console.log(err);
      setErrorMsg(err?.message);
    }
  };

  const onChange = (name: string, value: string) : any => {};

  return (
    <LayoutForCenter>
      <Form>
        <Heading1 text={"Create your account"} />
        <Error text={"this is error"} />
        <Input name="name" onChange={onChange} placeholder="Enter Your Name" />
        <Input
          name="number"
          type="number"
          onChange={onChange}
          placeholder="Enter Your Number"
        />
        <Input
          name="email"
          onChange={onChange}
          placeholder="Enter Your Email"
        />
        <Input
          name="password"
          onChange={onChange}
          placeholder="Enter Your Password"
        />
        <Button Icon={FaChevronUp} text={"Register"} />
        <Paragraph2>
          I have An Accout <Link href={"/login"}>Login Now</Link>
        </Paragraph2>
      </Form>
    </LayoutForCenter>
  );
};

export default Signup;
