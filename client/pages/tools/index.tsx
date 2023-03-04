import { CardTool, LayoutDataList, LayoutService, Svg } from "@/componants";
import { Logo } from "@/public/svgs";
import { TURBO_TRACE_DEFAULT_MEMORY_LIMIT } from "next/dist/shared/lib/constants";
import { MdMenu } from "react-icons/md";
import { getBlogs, getTools, getToolsCategory, instance } from "@/hooks/useApiCall";
import axios from "axios";
import { useSlug } from "@/hooks/useSlug";

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
    svg: '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>',
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

const Tools = ({ toolsData, toolsCategoryData }) => {

  console.log(useSlug("Title Hai sab To"))

  // {
  //   title: "Learn Sheet",
  //   Icon: Logo,
  //   listData: [
  //     { title: "How To Learn", Icon: Logo },
  //     { title: "How To Learn", Icon: Logo },
  //     { title: "How To Learn", Icon: Logo },
  //   ],
  // },

  // const craeteSidebarData = toolsCategoryData.data.map((item, i) => {

  //   let obj = {
  //     title : "",
  //     Icon : Logo,
  //     listData : [

  //     ]
  //   }
  //   obj.title = item.name
  // })


  return (
    <LayoutService data={data} sidebarData={sidebarData}>
      <LayoutDataList data={cardData} Card={CardTool} />
    </LayoutService>
  );
};


export const getServerSideProps = async () => {

  let toolsData
  let toolsCategoryData
  try {
    const getToolsData = await instance.get("blogs")
    const getToolsCategoryData = await instance.get("blogsCategory")

    toolsData = getToolsData.data
    toolsCategoryData = getToolsCategoryData.data
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      toolsData: toolsData,
      toolsCategoryData: toolsCategoryData
    }
  }
}

export default Tools;
