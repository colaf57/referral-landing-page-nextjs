import React from "react";
import classNames from "classnames";

import Icon, { IconType } from "../../../../_ui/Icon";

import styles from "./styles.module.scss";

type Props = {
  icon: IconType;
  value: number;
  text: string;
  className?: string;
};

const Card: React.FC<Props> = ({ icon, value, text, className }) => {
  return (
    <div className={classNames(className, styles.wrapper)}>
      <Icon name={icon} />
      <p className={styles.value}>{value}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Card;
