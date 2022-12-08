import { Button, Input, SocialMedia } from "@/componants";
import { useSocialMedia } from "@/hooks/useSocialMedia";

const Contact = () => {
  const socialData = useSocialMedia("techfansweb");
  const onChange = (name: string, value: any): any => {};

  return (
    <section className="page">
      <div className="contact">
        Contact us Page
        <div className="form">
          <p className="error">{"errMsg"}</p>
          <Input
            onChange={onChange}
            placeholder="Enter Your Email"
            name="email"
            type="email"
          />
          <Input
            onChange={onChange}
            placeholder="Enter Your Name"
            name="name"
            type="text"
          />
          <Input
            onChange={onChange}
            placeholder="Enter Your Query"
            name="query"
            type="text"
          />
          <Button text={"Send"} />
        </div>
        <div className="contact-social">
          Also ask me
          <div className="social-icons">
            {socialData.map((item, i) => {
              return <SocialMedia key={i} link={item.link} Icon={item.Icon} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
