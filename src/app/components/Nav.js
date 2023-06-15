"use client";

import Link from "next/link";
import styles from "@/app/styles/navbar.module.css";
import { useState } from "react";
import { CgMenu } from "react-icons/cg";

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <div className={styles.menuIcon} onClick={handleShowNavbar}>
        <CgMenu />
      </div>
      <div
        className={`${styles["navElements"]}  ${
          showNavbar && styles["active"]
        }`}
      >
        <ul>
          <li>
            <Link className="" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="" href="/movie">
              Movie
            </Link>
          </li>
          <li>
            <Link className="" href="/subscription">
              Subscription
            </Link>
          </li>
          <li>
            <Link className="" href="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
