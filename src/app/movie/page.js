import React from "react";
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/movie.module.css";
import glb from "@/app/page.module.css";

const page = async () => {
  const url = process.env.RAPID_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "814d931a9amshb0bcb063d63addcp101c21jsne2f18b095f96",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(main_data.jawSummary);

  return (
    <>
      <section className={glb.subWidth}>
        <div>
          <h2>Series & Movies</h2>
          <div className={styles.movieContainer}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
