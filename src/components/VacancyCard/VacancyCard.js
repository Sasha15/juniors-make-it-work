import React from "react";

import VacancyCardHeader from "./components/VacancyCardHeader";
import VacancyCardDescription from "./components/VacancyCardDescription";

import styles from "./VacancyCard.module.scss";

const VacancyCard = ({ vacancyData }) => {
  const {
    vacancyTitle,
    companyName,
    companyLocation,
    publishedDate,
    description,
  } = vacancyData;
  return (
    <div className={`${styles.vacancyCard} vacancyCard`}>
      <VacancyCardHeader
        title={vacancyTitle}
        companyName={companyName}
        companyLocation={companyLocation}
        date={publishedDate}
      />

      <VacancyCardDescription description={description} />
    </div>
  );
};

export default VacancyCard;
