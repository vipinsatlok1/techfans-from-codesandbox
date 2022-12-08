import { SocialMedia } from "@/componants";
import { useSocialMedia } from "@/hooks/useSocialMedia";

const about = () => {
  return (
    <section className="page">
      <div className="about">
        About us Page
        <AboutCard
          title={"About Tech Fans"}
          paragraph="This is a techfans site"
          username={"techfansweb"}
          name="Tech Fans"
          src="https://plus.unsplash.com/premium_photo-1663054704511-fb13cdd7cd3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <AboutCard
          title={"About Owner"}
          paragraph="This is a techfans site"
          name="me"
          username={"vipinsatlok"}
          src="https://plus.unsplash.com/premium_photo-1663054704511-fb13cdd7cd3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </section>
  );
};

interface Props {
  title: string;
  paragraph: string;
  username: string;
  src: string;
  name: string;
}

const AboutCard = ({ title, paragraph, username, src, name }: Props) => {
  const socialData = useSocialMedia(username);

  return (
    <div className="about-card-wrapper">
      <h2>{title}</h2>
      <div className="about-card">
        <img src={src} />
        <p>{paragraph}</p>
        <div className="about-social">
          Connect with {name}
          <div className="about-social-icons">
            {socialData.map((item, i) => {
              return <SocialMedia key={i} link={item.link} Icon={item.Icon} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
