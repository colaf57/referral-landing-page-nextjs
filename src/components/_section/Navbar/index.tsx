import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../../../../public/images/logo.png";

import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Navbar;
