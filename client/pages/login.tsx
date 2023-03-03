import {
  Button,
  Error,
  Form,
  Heading1,
  Input,
  LayoutForCenter,
  Paragraph2,
} from "@/componants";

import Link from "next/link";
import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [errMsg, setErrorMsg] = useState("");

  const onChange = (name: string, value: any): any => {
    setInput({ ...input, [name]: value });
  };

  const onClick = (): any => {
    // all input are required
    if (!input.email) return setErrorMsg("email is required!");
    if (!input.password) return setErrorMsg("password is required!");

    // call api for login user
    // ...
  };

  return (
    <LayoutForCenter>
      <Form>
        <Heading1 text={"Login now"} />
        {errMsg && <Error text={errMsg} />}
        <Input
          onChange={onChange}
          placeholder="Enter your email"
          name="email"
          type="email"
        />
        <Input
          onChange={onChange}
          placeholder="Enter your password"
          name="password"
          type="text"
        />
        <Button onClick={onClick} text="Login" Icon={FaSignInAlt} />
        <Paragraph2>
          Don't have an account <Link href={"/signup"}>Create Account</Link>
        </Paragraph2>
      </Form>
    </LayoutForCenter>
  );
};

export default Login;
