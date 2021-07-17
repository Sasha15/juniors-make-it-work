import React from "react";

import ContentSection from "../ContentSection";
import Container from "../Container";
import Row from "../Row";
import Column from "../Column";
import CompanyCard from "../CompanyCard";
import styles from "./CompaniesListContainer.module.scss";

const companies = [
  "GrandParade",
  "Seargin",
  "DEX Ventures",
  "NBC",
  "SVT SP Zoo",
  "DG Tech",
  "PickSaas",
  "BlackRose",
  "FrontKom",
];

const CompaniesListContainer = () => {
  return (
    <ContentSection pb={50}>
      <Container>
        <Row>
          <Column size={12}>
            <h2>Featured Companies</h2>
          </Column>
        </Row>
        <Row>
          <Column size={12}>
            <div className={styles.companiesListContainer}>
              {companies.map((company, i) => (
                <CompanyCard company={company} />
              ))}
            </div>
          </Column>
        </Row>
      </Container>
    </ContentSection>
  );
};

export default CompaniesListContainer;
