import styles from "../../styles/componants/layout.module.css";

import { Heading1, Input } from "..";
import { MdMenu } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";

import { useState } from "react";
import {
  ILayoutContent,
  ILayoutService,
  ISidebar,
  ISidebarSingleData,
} from "@/types";
import { instance } from "@/hooks/useApiCall";
import { getSidebarListData, getToolCardData } from "@/hooks/useCardData";
import { useRouter } from "next/router";
import { createSlug } from "@/hooks/useSlug";

const LayoutContent = ({
  data,
  children,
}: {
  children?: any;
  data: ILayoutContent;
}) => {
  const { title, serviceType, Icon, isOpen, onClick, isSearch, onChange } =
    data;

  const getData = async (search: string) => {
    const data = await instance.get(`tools?title=${search}`)
    const returnData = getToolCardData(data.data.data as any)
  }


  return (
    <>
      {/* title and search */}
      <div className={styles.layoutHeader}>
        {/* menu icon */}
        {isOpen ? (
          <MdClear className={styles.sidebarMenu} onClick={onClick} />
        ) : (
          <MdMenu className={styles.sidebarMenu} onClick={onClick} />
        )}

        {/* layout header */}
        <div className={styles.layoutTitle}>
          <Heading1 Icon={Icon} text={title} />
        </div>
        {isSearch ? (
          <div className={styles.layoutHeaderSearch}>
            <Input
              onChange={(name: string, value: string) => getData(value)}
              name="search"
              varient="search"
              placeholder={`Search ${serviceType} here..`}
            />
          </div>
        ) : null}
      </div>

      {/* main content */}
      <div className={styles.layoutContent}>{children || ""}</div>
    </>
  );
};

export const LayoutService = ({
  data,
  sidebarData,
  children,
}: ILayoutService) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = (): any => setIsOpen(!isOpen);

  data.onClick = onClick;
  data.isOpen = isOpen;

  // add a active class for toggle button in mobile size
  const activeClass = styles.active;
  const sidebarActiveClass = isOpen ? activeClass : "";
  const contentActiveClass = !isOpen ? activeClass : "";
  const sidebarClass = styles.sidebar + " " + sidebarActiveClass;
  const contentClass = styles.content + " " + contentActiveClass;
  const layoutActiveClass = isOpen ? activeClass : "";
  const layoutClass = styles.layoutWrapper + " " + layoutActiveClass;


  return (
    <section className={layoutClass}>
      {/* sidebar */}
      <div className={sidebarClass}>
        {sidebarData.map((item, i) => {
          return <List key={i} data={item} />;
        })}
      </div>

      {/* content */}
      <div className={contentClass}>
        <LayoutContent data={data}>{children}</LayoutContent>
      </div>
    </section>
  );
};

const List = ({ data }: { data: ISidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, Icon, _id } = data;
  const [listData, setListData] = useState([])

  const getData = async (id: string) => {
    setIsOpen(!isOpen)
    const data = await instance.get(`tools?category=${id}&limit=1000`)
    const returnData = getSidebarListData(data.data.data as any)
    setListData(returnData)
  }

  return (
    <div className={styles.list}>
      <div className={styles.top}>
        <div className={styles.left}>
          {/* <Icon /> */}
          {title}
        </div>
        <div className={styles.right}>
          {isOpen ? (
            <MdArrowDropUp onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <MdArrowDropDown onClick={() => getData(_id)} />
          )}
        </div>
      </div>
      <div
        className={isOpen ? styles.bottom + " " + styles.active : styles.bottom}
      >
        {listData.length && listData?.map((item, i) => {
          return <BottomList key={i} title={item.title} _id={item._id} Icon={item.Icon} />;
        })}
      </div>
    </div>
  );
};

const BottomList = ({ title, Icon, _id }: ISidebarSingleData) => {

  const router = useRouter()
  const slug = createSlug(title)

  return (
    <div>
      {/* <Icon /> */}
      <div onClick={() => router.push(`/tools/${slug}`)}>{title}</div>
    </div>
  );
};
