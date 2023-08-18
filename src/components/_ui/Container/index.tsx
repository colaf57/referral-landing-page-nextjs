import React, { ReactNode } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={classNames(className, styles.wrapper)}>{children}</div>;
};

export default Container;
