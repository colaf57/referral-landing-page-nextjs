import React from "react";
import { useRouter } from "next/router";

import Card from "./Card";
import IconButton from "../../../_ui/IconButton";
import { IconType } from "../../../_ui/Icon";

import styles from "./styles.module.scss";

const infoMap: { icon: IconType; value: number; text: string }[] = [
  {
    icon: "UserHandUp",
    value: 132,
    text: "Current referrals",
  },
  {
    icon: "HandMoney",
    value: 21,
    text: "Referrals that paid",
  },
  {
    icon: "UserCheckRounded",
    value: 10,
    text: "Days left to invite friends",
  },
  {
    icon: "HourGlass",
    value: 180,
    text: "Days left to make purchases",
  },
];

const customClassNames = [
  "rounded-none miniLandscape:rounded-tl-3xl desktop:rounded-none",
  "rounded-none miniLandscape:rounded-tr-3xl desktop:rounded-none",
  "rounded-none miniLandscape:rounded-bl-3xl desktop:rounded-none",
  "rounded-none miniLandscape:rounded-br-3xl desktop:rounded-none",
];

const ReferralInfo = () => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.subWrapper}>
        <div className={styles.cardWrapper}>
          {infoMap.map((item, index) => (
            <Card
              key={item.icon}
              icon={item.icon}
              value={item.value}
              text={item.text}
              className={customClassNames[index]}
            />
          ))}
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.emptyWrapper}></div>
          <IconButton
            prefix="Gift"
            className={styles.button}
            label="Exchange your earned bonuses"
            onClick={() => router.push("/referral")}
          />
        </div>
      </div>
    </div>
  );
};

export default ReferralInfo;
