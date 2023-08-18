import React from "react";
import classNames from "classnames";

import Icon, { IconType } from "../Icon";

import styles from "./styles.module.scss";

type Props = {
  label?: string;
  prefix?: IconType;
  suffix?: IconType;
  onClick?: Function;
  buttonStyle?: "primary" | "white" | "dark";
  className?: string;
  textClassName?: string;
  size?: "small" | "default" | "smallest";
  rounded?: boolean;
  prefixActive?: boolean;
  fullWidth?: boolean;
};

const IconButton: React.FC<Props> = ({
  label,
  prefix,
  suffix,
  onClick = () => {},
  buttonStyle = "",
  className,
  textClassName = "",
  size = "default",
  rounded = false,
  prefixActive = false,
  fullWidth = false,
}) => {
  return (
    <div
      className={classNames(className, styles.button, styles[size], styles[buttonStyle], {
        [styles.rounded]: rounded,
        ["w-full"]: fullWidth,
      })}
      role="button"
      onClick={() => onClick()}
    >
      {prefix && (
        <div className={classNames(styles.mobileIcon, { [styles.active]: prefixActive })}>
          <Icon name={prefix} />
        </div>
      )}
      <p className={classNames(styles.text, textClassName)}>{label}</p>
      {suffix && (
        <div className={classNames(styles.icon)}>
          <Icon name={suffix} />
        </div>
      )}
    </div>
  );
};

export default IconButton;
