import Hero from "@/app/components/Hero";
import LatestMovies from "@/app/components/LatestMovies";

export default function Home() {
  return (
    <main>
      <Hero
        imgSrc={"/heroposter.jpg"}
        title={"Watch Black Adam in 8K"}
        text={
          "It stars Dwayne Johnson as Teth-Adam / Black Adam, an ancient superhuman who is released from his magic imprisonment by a group of archeologists to free the ..."
        }
      />
      <LatestMovies />
      <Hero
        imgSrc={"/heroposter2.jpg"}
        title={"Watch the batman 2 in 8K"}
        text={
          "The Duffer Brothers announced that season 5 will be the final chapter for the sci-fi series that's sustained global ..."
        }
      />
    </main>
  );
}
