import React from "react";
import styles from "./Row.module.scss";

const Row = ({ children, size }) => {
  return <div className={styles.row}>{children}</div>;
};

export default Row;
