import React from "react";

import Button from "../../../_ui/Button";
import Card from "./Card";
import { IconType } from "../../../_ui/Icon";

import styles from "./styles.module.scss";

const detailInfoMap: { step: string; icon: IconType; title: string; description: string }[] = [
  {
    step: "01",
    icon: "Pen",
    title: "Sign Up",
    description: "Get 3 freinds to join by Aug 23 and get up to $200 bonus.",
  },
  {
    step: "02",
    icon: "Bill",
    title: "Purchase",
    description: "Get 3 freinds to join by Aug 23 and get up to $200 bonus.",
  },
  {
    step: "03",
    icon: "User",
    title: "Refer friends",
    description: "Get 3 freinds to join by Aug 23 and get up to $200 bonus.",
  },
  {
    step: "04",
    icon: "ColorGift",
    title: "Holiday",
    description: "Get 3 freinds to join by Aug 23 and get up to $200 bonus.",
  },
];

const Detail = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Program details</p>
      <p className={styles.description}>
        Get 3 freinds to join by Aug 23
        <br />
        and get up to $200 bonus.
      </p>
      <div className={styles.cardWrapper}>
        {detailInfoMap.map((item) => (
          <Card key={item.step} step={item.step} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
      <Button className={styles.button}>Sign Up</Button>
    </div>
  );
};

export default Detail;
