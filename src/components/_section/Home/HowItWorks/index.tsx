import React from "react";

import Card from "./Card";

import styles from "./styles.module.scss";

const staticHowItWorks = [
  {
    title: "Share",
    description:
      "Share your personalized QR code or referral link to spread the word about our business in your local area.",
  },
  {
    title: "Encourage to sign up",
    description:
      "Send a friendly reminder to your loved ones to sign up within 10 days to be eligible for incredible rewards.",
  },
  {
    title: "Making a purchase",
    description:
      "When your friends and family make a purchase, you'll receive a $500 hotel voucher or a 7-night luxury vacation.",
  },
  {
    title: "Get better rewards",
    description: "Sign up, create an account, gift your friends, and earn points for better rewards.",
  },
  {
    title: "You have 180 days",
    description: "Cash out anytime within 180 days and enjoy the benefits at your chosen time.",
  },
];

const HowItWorks = () => {
  return (
    <>
      <p className={styles.text}>How it works</p>
      <div className={styles.wrapper}>
        {staticHowItWorks.map((item, index) => (
          <Card key={index} stepNumber={index + 1} title={item.title} description={item.description} />
        ))}
      </div>
    </>
  );
};

export default HowItWorks;
