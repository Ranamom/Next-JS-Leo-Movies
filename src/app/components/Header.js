import Image from "next/image";
import Link from "next/link";
import React from "react";
import Nav from "@/app/components/Nav";
import styles from "@/app/styles/navbar.module.css";
import glb from "@/app/page.module.css";

const Header = () => {
  return (
    <header className={styles.navbar}>
      <div className={glb.subWidth}>
        <div className={styles.navRow}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/logo.svg"
              alt="Leo Movies"
              width={220}
              height={90}
            />
          </Link>

          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
