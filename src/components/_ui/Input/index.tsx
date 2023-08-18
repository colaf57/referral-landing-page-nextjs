import React, { InputHTMLAttributes } from "react";
import classNames from "classnames";

import Icon, { IconType } from "../Icon";

import styles from "./styles.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name?: string;
  type: string;
  className?: string;
  readonly?: boolean;
  prefix?: IconType;
  suffix?: IconType;
  disabled?: boolean;
  prefixClick?: Function;
  suffixClick?: Function;
};

const Input: React.FC<Props> = ({
  label,
  name,
  type,
  className = "",
  readonly = false,
  prefix,
  suffix,
  disabled = false,
  prefixClick = () => {},
  suffixClick = () => {},
  ...props
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        <input
          name={name}
          type={type}
          className={classNames(
            styles.inputStyle,
            className,
            { [styles.prefix]: prefix },
            { [styles.suffix]: suffix },
            { [styles.disabled]: disabled },
          )}
          readOnly={readonly}
          disabled={disabled}
          {...props}
        />
        {suffix && (
          <div
            className={classNames(styles.suffixIcon, { [styles.disabled]: disabled })}
            role="button"
            onClick={() => suffixClick()}
          >
            <Icon name={suffix} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
