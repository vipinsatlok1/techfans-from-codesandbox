import { CardTool, LayoutDataList, LayoutService, Svg } from "@/componants";
import { Logo } from "@/public/svgs";
import { TURBO_TRACE_DEFAULT_MEMORY_LIMIT } from "next/dist/shared/lib/constants";
import { MdMenu } from "react-icons/md";
import { getBlogs, getTools, getToolsCategory, instance } from "@/hooks/useApiCall";
import axios from "axios";
import { getSidebarData, getToolCardData } from "@/hooks/useCardData";
import { ILayoutContent, ISidebar } from "@/types";

const data = {

  isSearch: true,
  title: "Tools Page",
  serviceType: "tools",
}

// isSearch: boolean;
// children?: any;
// title: string;
// Icon: any;
// serviceType: string;
// onChange: () => {};
// onClick?: () => {};
// isOpen?: boolean;

const Tools = ({ toolsData, toolsCategoryData }: { toolsData: any; toolsCategoryData: any }) => {

  console.log(toolsData, toolsCategoryData)
  console.log(toolsCategoryData)
  const cardData = getToolCardData(toolsData.data)
  const sidebarData = getSidebarData(toolsCategoryData.data)

  return (
    <LayoutService data={data as ILayoutContent} sidebarData={sidebarData as any}>
      <LayoutDataList data={cardData} Card={CardTool} />
    </LayoutService>
  );
};


export const getServerSideProps = async () => {

  let toolsData
  let toolsCategoryData
  try {
    const getToolsData = await instance.get("tools")
    const getToolsCategoryData = await instance.get("toolsCategory")

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
