import React from "react";
import Plan from "@/app/components/Plan";
import glb from "@/app/page.module.css";
import styles from "@/app/styles/plan.module.css";

const subscription = () => {
  return (
    <div className={glb.subWidth}>
      <h2>Plans and Pricing</h2>
      <div className={styles.planContainer}>
        <Plan
          title="Premium"
          list1="Unlimited ad-free movies, TV shows, and mobile games"
          list2="Watch on 4 supported devices at a time"
          list3="Watch in Ultra HD"
          btnText="$9.99 / Month"
        />
        <Plan
          title="Standard"
          list1="Unlimited ad-free movies, TV shows, and mobile games"
          list2="Watch on 2 supported devices at a time"
          list3="Watch in Full HD"
          btnText="$7.99 / Month"
        />
        <Plan
          title="Basic"
          list1="Unlimited ad-free movies, TV shows, and mobile games"
          list2="Watch on 1 supported devices at a time"
          list3="Watch in HD"
          btnText="$3.99 / Month"
        />
      </div>
    </div>
  );
};

export default subscription;
