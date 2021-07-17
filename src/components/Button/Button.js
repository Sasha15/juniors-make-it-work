import React from "react";

import styles from "./Button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Button = ({ link, text, withArrow }) => {
  return (
    <a
      href={link}
      className={`${styles.btn} ${withArrow ? styles.btnSmall : null}`}
    >
      {text && <span className={withArrow && styles.withPadding}>{text}</span>}
      {withArrow && <FontAwesomeIcon icon={faChevronRight} />}
    </a>
  );
};
export default Button;
