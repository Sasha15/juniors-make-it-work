import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";

import styles from "./CompanyCard.module.scss";

const CompanyCard = ({ company }) => {
  return (
    <div className={styles.companyCard}>
      <span className={styles.iconContainer}>
        <FontAwesomeIcon icon={faSuitcase} />
      </span>
      <p>{company}</p>
    </div>
  );
};

export default CompanyCard;
