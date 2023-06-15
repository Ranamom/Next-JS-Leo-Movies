import React from "react";
import glb from "@/app/page.module.css";
import Link from "next/link";
import styles from "@/app/styles/plan.module.css";

const Plan = ({ title, list1, list2, list3, btnText }) => {
  return (
    <>
      <div className={styles.planBox}>
        <h4>{title}</h4>
        <ul>
          <li>{list1}</li>
          <li>{list2}</li>
          <li>{list3}</li>
        </ul>
        <Link href="/movie">
          <button className={glb.btnSmall}>{btnText}</button>
        </Link>
      </div>
    </>
  );
};

export default Plan;
