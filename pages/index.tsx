import { CardHomeAd } from "@/componants";
import LayoutHome from "@/componants/layout/LayoutHome";
import { DataLeftHome, DataRightHome } from "@/data/homeData";

const Home = () => {
  return (
    <>
      <LayoutHome
        Card={CardHomeAd}
        cardData={DataRightHome}
        left={DataLeftHome.one}
      />
      <LayoutHome
        side="left"
        Card={CardHomeAd}
        cardData={DataRightHome}
        left={DataLeftHome.two}
      />
      <LayoutHome
        Card={CardHomeAd}
        cardData={DataRightHome}
        left={DataLeftHome.three}
      />
      <LayoutHome
        side="left"
        Card={CardHomeAd}
        cardData={DataRightHome}
        left={DataLeftHome.four}
      />
    </>
  );
};

export default Home;
