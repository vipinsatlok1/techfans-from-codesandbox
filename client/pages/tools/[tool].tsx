import {
  CardBlog,
  CardProject,
  CardTool,
  Layout,
  LayoutDataList,
  LayoutService,
  LayoutTool,
  Sidebar,
} from "@/componants";
import { Logo } from "@/public/svgs";
import { YoutubeThumbnailDownload } from "@/tools";
import { useRouter } from "next/router";
import { MdArrowDropUp } from "react-icons/md";
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

// export interface ILayoutContent {
//   isSearch: boolean;
//   children: any;
//   title: string;
//   Icon: any;
//   serviceType: string;
//   onChange: () => {};
//   onClick?: () => {};
//   isOpen?: boolean;
// }

const data = {
  isSearch: false,
  title: "Youtube Thumbnail Download",
  serviveType: "tools",
  Icon: MdMenu,
};

const Tool = () => {
  const router = useRouter();
  const slug = router.query.tool;

  return (
    // <Layout sidebarData={sidebarData} Card={ToolCard} CardData={data}></Layout>
    <LayoutService data={data} sidebarData={sidebarData}>
      <LayoutTool>
        <YoutubeThumbnailDownload />
      </LayoutTool>
    </LayoutService>
  );
};

export default Tool;
