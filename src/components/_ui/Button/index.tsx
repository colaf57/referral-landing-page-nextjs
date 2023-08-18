import React, { ReactNode } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

type Props = {
  type?: "submit" | "button" | "reset";
  buttonStyle?: "primary" | "white" | "dark";
  isTransparent?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  fullWidth?: boolean;
  size?: "large" | "medium" | "default";
};

const Button: React.FC<Props> = ({
  type = "button",
  buttonStyle = "primary",
  isTransparent = false,
  className = "",
  children,
  onClick = () => {},
  fullWidth = false,
  size = "default",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(className, styles.buttonStyle, styles[buttonStyle], styles[size], {
        [styles.transparent]: isTransparent,
        "w-full": fullWidth,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
