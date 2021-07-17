import React from "react";

import Container from "../Container";
import Row from "../Row";
import Column from "../Column";
import Button from "../Button";

import styles from "./HeroBanner.module.scss";

import heroImg from "../../assets/images/hero.jpg";

const HeroBanner = () => {
  return (
    <div
      className={styles.heroBanner}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <Container>
        <Row>
          <Column size={12}>
            <div className={styles.heroBannerContent}>
              <h1>Juniors make IT work.</h1>
              <p>Hire and invest in highly skilled juniors now.</p>
              <Button link="#" text="Post Offer Now" />
            </div>
          </Column>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBanner;
