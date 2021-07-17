import React from "react";
import styles from "./Column.module.scss";

const Column = ({ children, size, borderRight }) => {
  return (
    <div
      className={`${styles[`col-${size}`]} ${borderRight && styles.withBorder}`}
    >
      {children}
    </div>
  );
};

export default Column;
