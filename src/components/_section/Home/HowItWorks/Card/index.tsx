import React from "react";

import styles from "./styles.module.scss";

type Props = {
  stepNumber: number;
  title: string;
  description: string;
};

const HowItWorksCard: React.FC<Props> = ({ stepNumber, title, description }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.stepWrapper}>
        <div className={styles.step}>
          <p className={styles.text}>{`Step${stepNumber}`}</p>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
