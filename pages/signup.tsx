import Link from "next/link";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import {
  Button,
  Error,
  Form,
  Heading1,
  Input,
  Layout,
  Paragraph2,
} from "@/componants";
import { register } from "@/hooks/useApiCall";
import { Router, useRouter } from "next/router";
import cookies from 'js-cookie';

const Signup = () => {

  const router = useRouter()
  if (cookies.get('auth')) router.replace("/")

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errMsg, setErrorMsg] = useState("");

  const onClick = async () => {
    if (!input.name) return setErrorMsg("name is required");
    if (!input.email) return setErrorMsg("email is required");
    if (!input.password) return setErrorMsg("password is required");

    // call api for login user
    try {

      await register(input)
      return router.replace("/")
    } catch (err) {
      console.log(err)
    }
  };

  const onChange = (name: string, value: string): any => {
    setInput({ ...input, [name]: value });
  };

  return (
    <Layout>
      <Form>
        <Heading1 text={"Create your account"} />
        {errMsg && <Error text={errMsg} />}
        <Input name="name" onChange={onChange} placeholder="Enter your name" />
        <Input
          name="email"
          onChange={onChange}
          placeholder="Enter your email"
        />
        <Input
          name="password"
          onChange={onChange}
          placeholder="Enter your password"
        />
        <Button onClick={onClick} Icon={FaChevronUp} text={"Register"} />
        <Paragraph2>
          I have an accout <Link href={"/login"}>Login now</Link>
        </Paragraph2>
      </Form>
    </Layout>
  );
};

export default Signup;
