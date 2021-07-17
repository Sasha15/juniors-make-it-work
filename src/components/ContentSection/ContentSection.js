import React from "react";
import styles from "./ContentSection.module.scss";

const ContentSection = ({ children, pb }) => {
  console.log();
  return (
    <div
      className={styles.contentSection}
      style={{ paddingBottom: pb ? `${pb}px` : 0 }}
    >
      {children}
    </div>
  );
};

export default ContentSection;
