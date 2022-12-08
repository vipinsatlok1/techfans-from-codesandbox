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
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const onChange = (name: string, value: any): any => {};

  return (
    <LayoutForCenter>
      <Form>
        <Heading1 text={"Let`s Login"} />
        <Error text={"This is error"} />
        <Input
          onChange={onChange}
          placeholder="Enter Your Email"
          name="email"
          type="email"
        />
        <Input
          onChange={onChange}
          placeholder="Enter Your Email"
          name="password"
          type="password"
        />
        <Button text="Login" Icon={FaSignInAlt} />
        <Paragraph2>
          Not An Accout <Link href={"/signup"}>Create An Account</Link>
        </Paragraph2>
      </Form>
    </LayoutForCenter>
  );
};

export default Login;
