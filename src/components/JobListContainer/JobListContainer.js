import React from "react";

import Container from "../Container";
import Column from "../Column";
import Row from "../Row";
import ContentSection from "../ContentSection";
import VacancyCard from "../VacancyCard";

const vacancies = [
  {
    id: "1",
    vacancyTitle: "Junior Java Developer",
    publishedDate: "2 hours ago",
    companyName: "PickSaas",
    companyLocation: "Wrclaw, Polska",
    description:
      "I am currently looking for a Java Developer. Project for Public Sector Location: Wroclaw (during the pandemic remote work) /n$ up to PLN 550 net / MD B2B",
  },
  {
    id: "2",
    vacancyTitle: "Junior Project Manager",
    publishedDate: "3 hours ago",
    companyName: "Frontkom",
    companyLocation: "Lublin, Polska",
    description:
      "Join us in the Lublin office to build innovative long-term projects. Exciting international clients and partners and a work environment focused on learning and growth awaits you!",
  },
  {
    id: "3",
    vacancyTitle: "Junior Project Manager",
    publishedDate: "1 day ago",
    companyName: "Frontkom",
    companyLocation: "Lublin, Polska",
    description:
      "I am currently looking for a Java Developer. Project for Public Sector Location: Wroclaw (during the pandemic remote work) /n$ up to PLN 550 net / MD B2B",
  },
];

const JobListContainer = () => {
  return (
    <ContentSection>
      <Container>
        <Row>
          <Column size={12}>
            <h2>Newest Job Offers</h2>
          </Column>
        </Row>
        <Row>
          {vacancies.map((vacancy, i) => (
            <Column size={4} key={vacancy.id} borderRight={i !== 0 && true}>
              <VacancyCard vacancyData={{ ...vacancy }} />
            </Column>
          ))}
        </Row>
      </Container>
    </ContentSection>
  );
};

export default JobListContainer;
