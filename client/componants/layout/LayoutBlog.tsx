import React, { useEffect, useRef } from "react";
import styles from "../../styles/componants/layout.module.css";
import { LayoutFeedback } from "./LayoutFeedback";

export const LayoutBlog = ({ html }: { html: string }) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    ref.current.innerHtml = html;
  });

  return (
    <div ref={ref} className={styles.singleBlogLayout}>
      asasasas
      <LayoutFeedback like={4343} link="httpsLtwitter" />
    </div>
  )
};