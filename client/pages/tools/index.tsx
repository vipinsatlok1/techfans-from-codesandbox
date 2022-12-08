import { CardTool, LayoutDataList, LayoutService } from "@/componants";
import { Logo } from "@/public/svgs";
import { TURBO_TRACE_DEFAULT_MEMORY_LIMIT } from "next/dist/shared/lib/constants";
import { MdMenu } from "react-icons/md";

export const sidebarData = [
  {
    title: "Google Sheet",
    Icon: Logo,
    listData: [
      { title: "How To Learn", Icon: Logo },
      { title: "How To Learn", Icon: Logo },
      { title: "How To Learn", Icon: Logo },
    ],
  },
  {
    title: "Learn Sheet",
    Icon: Logo,
    listData: [
      { title: "How To Learn", Icon: Logo },
      { title: "How To Learn", Icon: Logo },
      { title: "How To Learn", Icon: Logo },
    ],
  },
  {
    title: "Google Sheet",
    Icon: Logo,
    listData: [
      { title: "How To Learn", Icon: Logo },
      { title: "How To Learn", Icon: Logo },
      { title: "How To Learn", Icon: Logo },
    ],
  },
];

const cardData = [
  {
    Icon: Logo,
    title: "Color Genrate",
    paragraph: "how to genrate color",
    like: 454,
    slug: "color-genrate",
    src: "/images/blog.jpg",
  },
  {
    Icon: Logo,
    title: "Color Genrate",
    paragraph: "how to genrate color",
    like: 454,
    slug: "color-genrate",
    src: "/images/blog.jpg",
  },
  {
    Icon: Logo,
    title: "Color Genrate",
    paragraph: "how to genrate color",
    like: 454,
    src: "/images/blog.jpg",
    slug: "color-genrate",
  },
  {
    Icon: Logo,
    title: "Color Genrate",
    paragraph: "how to genrate color",
    like: 454,
    src: "/images/blog.jpg",
    slug: "color-genrate",
  },
];

const data = {
  isSearch: true,
  title: "Youtube Thumbnail Download",
  serviceType: "tools",
  Icon: MdMenu,
};

const Tools = () => {
  return (
    <LayoutService data={data} sidebarData={sidebarData}>
      <LayoutDataList data={cardData} Card={CardTool} />
    </LayoutService>
  );
};

export default Tools;
