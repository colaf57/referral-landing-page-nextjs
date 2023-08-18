import React, { useState } from "react";

import Button from "../../../_ui/Button";
import Icon, { IconType } from "../../../_ui/Icon";
import Modal from "../../../_ui/Modal";

import styles from "./styles.module.scss";

const shareButtonMap: { icon: IconType; link: string }[] = [
  {
    icon: "Mail",
    link: "https://mail.google.com",
  },
  {
    icon: "Whatsapp",
    link: "https://web.whatsapp.com",
  },
  {
    icon: "Telegram",
    link: "https://t.me",
  },
  {
    icon: "Social1",
    link: "https://google.com",
  },
  {
    icon: "Facebook",
    link: "https://facebook.com",
  },
  {
    icon: "Social2",
    link: "https://google.com",
  },
];

const Share = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <p className={styles.text}>Share via</p>
      <div className={styles.buttonWrapper}>
        {shareButtonMap.map((item) => (
          <Button className={styles.button} key={item.icon}>
            <Icon name={item.icon} />
          </Button>
        ))}
      </div>
      <p className={styles.termsText}>
        The referral promotion terms:
        <span className={styles.terms} onClick={() => setShowModal(true)}>
          Referral Terms
        </span>
      </p>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className={styles.modalWrapper}>
          <h2 className={styles.title}>Referral Terms</h2>
          <p className={styles.description}>
            Referral marketing Any technique that a company uses to encourage people to tell others about their products
            and services counts as referral marketing. So, referral marketing is not limited to the traditional customer
            referral program, but also includes techniques such as influencer marketing, brand ambassadors, affiliate
            marketing, and relationship marketing. Referral program / customer referral program / refer-a-friend program
            A referral program is a formalized system that a company uses to encourage loyal customers to share their
            company with friends. (It is also known as a customer referral program or refer-a-friend.) Referral programs
            simplify the sharing process, and most give customers a reward for sharing.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Share;
