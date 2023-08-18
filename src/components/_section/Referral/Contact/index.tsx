import React from "react";

import IconButton from "../../../_ui/IconButton";

import styles from "./styles.module.scss";

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Company contacts</p>
      <div className={styles.buttonWrapper}>
        <IconButton prefix="Global" className={styles.button} label="hornsley-hitech.com" />
        <IconButton prefix="Phone" className={styles.button} label="+44 7123 456789" />
        <IconButton prefix="Info" className={styles.button} label="vCard" />
      </div>
    </div>
  );
};

export default Contact;
