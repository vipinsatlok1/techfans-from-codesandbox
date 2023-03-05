import {
  Button,
  Error,
  Form,
  Heading1,
  Input,
  Paragraph2,
  Layout,
} from "../componants";
import { getUser, login } from "@/hooks/useApiCall";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import cookies from 'js-cookie';

const Login = () => {
  
  const router = useRouter()
  if (cookies.get('auth')) router.replace("/")

  const [input, setInput] = useState({ email: "", password: "" });
  const [errMsg, setErrorMsg] = useState("");

  const onChange = (name: string, value: any): any => {
    setInput({ ...input, [name]: value });
  };

  const onClick = async () => {
    // all input are required
    if (!input.email) return setErrorMsg("email is required!");
    if (!input.password) return setErrorMsg("password is required!");

    // call api for login user
    try {
      await login(input)
      return router.replace("/")
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <Layout>
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
    </Layout>
  );
};

export default Login;
