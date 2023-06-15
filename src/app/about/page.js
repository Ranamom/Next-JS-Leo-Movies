import React from "react";
import Hero from "@/app/components/Hero";

const about = () => {
  return (
    <>
      <Hero
        imgSrc={"/all movie.webp"}
        title={"GET 30% OFF FOR ANNUAL SUBSCRIPTION"}
        text={
          "With Black Panther: Wakanda Forever, Marvel Studios has reached a satisfying 30 movies in the 30th official Marvel Studios poster...."
        }
      />
    </>
  );
};

export default about;
