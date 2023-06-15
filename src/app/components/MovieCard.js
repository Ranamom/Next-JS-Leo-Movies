import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/movie.module.css";
import glb from "@/app/page.module.css";

const MovieCard = (curElem) => {
  const { id, type, title, synopsis } = curElem.jawSummary;

  return (
    <>
      <div className={styles.movieBox}>
        <div>
          <Image
            src={curElem.jawSummary.backgroundImage.url}
            alt={title}
            width={260}
            height={400}
          />
        </div>
        <div className={styles.movieCardText}>
          <h3>{title.substring(0, 18)}</h3>
          <p>{`${synopsis.substring(0, 36)} ...`}</p>
          <Link href={`/movie/${id}`}>
            <button className={glb.btnSmall}>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
