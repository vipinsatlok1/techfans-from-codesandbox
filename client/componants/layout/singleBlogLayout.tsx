import React, { useEffect, useRef } from "react";
import styles from "../../styles/componants/layout.module.css";

const singleBlogLayout = ({ html }: { html: string }) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    ref.current.innerHtml = html;
  });

  return <div ref={ref} className={styles.singleBlogLayout}></div>;
};

export default singleBlogLayout;
