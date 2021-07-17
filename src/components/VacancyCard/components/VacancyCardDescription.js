import React from "react";

import styles from "../VacancyCard.module.scss";

import Button from "../../Button";

const VacancyCardDescription = ({ description }) => {
  return (
    <div className={styles.description}>
      <div className={styles.vacancyButtonContainer}>
        <Button link="#" withArrow />
      </div>
      <p>{description}</p>
    </div>
  );
};

export default VacancyCardDescription;
