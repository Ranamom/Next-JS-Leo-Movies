import Image from "next/image";
import React from "react";
import styles from "@/app/styles/movie.module.css";
import glb from "@/app/page.module.css";

const page = async ({ params }) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "814d931a9amshb0bcb063d63addcp101c21jsne2f18b095f96",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;

  return (
    <div className={glb.subWidth}>
      <h2>
        Leo Movie \ <span> {main_data.type} </span>
      </h2>
      <div>
        <div>
          <Image
            className={styles.singleMovieImg}
            src={main_data.backgroundImage.url}
            alt={main_data.title}
            width={1180}
            height={600}
          />
        </div>
        <div>
          <h1 className={styles.singleMovieHeading}>{main_data.title}</h1>
          <p>{main_data.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
