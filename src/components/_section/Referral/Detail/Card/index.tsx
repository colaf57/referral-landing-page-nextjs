import React from "react";

import Icon, { IconType } from "../../../../_ui/Icon";

import styles from "./styles.module.scss";

type Props = {
  step: string;
  icon: IconType;
  title: string;
  description: string;
};

const Card: React.FC<Props> = ({ step, icon, title, description }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.stepWrapper}>
        <div className={styles.step}>
          <p className={styles.text}>{step}</p>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <Icon name={icon} />
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
