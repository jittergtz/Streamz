import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "../components/LoadMore";

import { fetchAnime } from "./action";

async function Home() {
  const data = await fetchAnime(1)
  return (
    <main>


{/*Here the API content gets displayed by the {data} (from "./action") and styled*/}
   
    <div className="flex justify-center ">

      <div className="mx-auto rounded-xl z-10 backdrop-blur-lg bg-neutral-950/10 p-3 md:mt-20  lg:mt-20  xl:mt-28 2xl:mt-48">
      <h2 className=" p-2  text-2xl sm:text-3xl z-10 text-neutral-300 font-bold line-clamp-1">Entdecke beliebte Animes</h2>
      <section className="mx-auto grid xl:grid-cols-6  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10">
          {data}
      </section>
      </div>
      </div>

      <LoadMore />
    </main>
  );
}

export default Home;