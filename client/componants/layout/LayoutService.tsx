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

const LayoutContent = ({
  data,
  children,
}: {
  children: any;
  data: ILayoutContent;
}) => {
  const { title, serviceType, Icon, isOpen, onClick, isSearch, onChange } =
    data;

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
              onChange={onChange}
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
  const { title, Icon, listData } = data;

  return (
    <div className={styles.list}>
      <div className={styles.top}>
        <div className={styles.left}>
          <Icon />
          {title}
        </div>
        <div className={styles.right}>
          {isOpen ? (
            <MdArrowDropUp onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <MdArrowDropDown onClick={() => setIsOpen(!isOpen)} />
          )}
        </div>
      </div>
      <div
        className={isOpen ? styles.bottom + " " + styles.active : styles.bottom}
      >
        {listData.map((item, i) => {
          return <BottomList key={i} title={item.title} Icon={item.Icon} />;
        })}
      </div>
    </div>
  );
};

const BottomList = ({ title, Icon }: ISidebarSingleData) => {
  return (
    <div>
      <Icon />
      {title}
    </div>
  );
};
