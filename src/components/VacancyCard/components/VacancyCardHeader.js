import React from "react";

import styles from "../VacancyCard.module.scss";

const VacancyCardHeader = ({ title, companyName, companyLocation, date }) => {
  return (
    <div className={styles.cardHeader}>
      <div>
        <p className={styles.vacancyName}>{title}</p>
        <p>
          <span className={styles.companyName}>{companyName} </span>
          <span className={styles.textGray}>{companyLocation}</span>
        </p>
      </div>
      <div>
        <p className={styles.date}>
          <span className={styles.textGray}>{date}</span>
        </p>
      </div>
    </div>
  );
};

export default VacancyCardHeader;
