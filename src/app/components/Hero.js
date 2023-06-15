import Image from "next/image";
import React from "react";
import styles from "@/app/styles/hero.module.css";
import Link from "next/link";
import glb from "@/app/page.module.css";

const Hero = ({ imgSrc, title, text }) => {
  return (
    <>
      <div className={styles.heroImgBox}>
        <Image src={imgSrc} alt="heo" width={1366} height={768} />

        <div className={styles.heroText}>
          <h1>{title}</h1>
          <p>{text}</p>
          <Link href="/subscription">
            <button className={glb.btn}>Watch Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
