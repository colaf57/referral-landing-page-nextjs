import Image from "next/image";
import React, { useState } from "react";

import Button from "../../../_ui/Button";
import googleImage from "../../../../../public/images/google.png";
import referralImage from "../../../../../public/images/bg.png";

import styles from "./styles.module.scss";

const Hero = () => {
  const [name, setName] = useState("Tom Curry");

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image src={referralImage} alt="referral" />
      </div>

      <p className={styles.title}>
        {name}
        <br />
        wanted to refer you
      </p>

      <div className={styles.buttonWrapper}>
        <Image src={googleImage} alt="google" />
        <Button buttonStyle="white">{`See ${name}'s review`}</Button>
      </div>
    </div>
  );
};

export default Hero;
