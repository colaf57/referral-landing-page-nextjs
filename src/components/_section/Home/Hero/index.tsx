import Image from "next/image";
import React, { useEffect, useState } from "react";
import classNames from "classnames";

import Input from "../../../_ui/Input";
import referralImage from "../../../../../public/images/bg.png";

import styles from "./styles.module.scss";

const Hero = () => {
  const [link, setLink] = useState("referral.com/link-vladlen");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => {
        setShowToast(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [showToast]);

  const copyClipboard = () => {
    navigator.clipboard.writeText(link);
    setShowToast(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image src={referralImage} alt="referral" />
      </div>

      <p className={styles.title}>
        Refer your friends,
        <br />
        earn up to $100 a year
      </p>

      <p className={styles.description}>Get 3 freinds to join by Aug 23 and get up to $200 bonus.</p>

      <div className={styles.inputWrapper}>
        <div className={styles.subWrapper}>
          <div
            className={classNames(
              styles.toast,
              { hidden: !showToast },
              { "flex justify-center items-center": showToast },
            )}
          >
            <p className="font-bold text-black">Copied!</p>
          </div>
          <Input
            type="text"
            readOnly
            disabled
            value={link}
            suffix="Copy"
            className={styles.input}
            suffixClick={copyClipboard}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
