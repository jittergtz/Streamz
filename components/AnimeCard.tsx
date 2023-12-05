import Image from "next/image";




export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

const variants = {
  hidden: {opacity: 0},
  visivle: {opacity: 1},

} 

// The Anime card gets the data from our API here & styling the cards 
function AnimeCard({ anime, index }: Prop) {
  
  return (
  <div className="relative  border-2 border-neutral-800 shadow-md shadow-neutral-800 rounded-xl w-40  ">
      <div className="relative h-[12rem]">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          className="rounded-t-xl relative "
        />
      </div>
      <div className="flex flex-col bg-neutral-950 rounded-b-xl ">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold pl-1 text-neutral-100 text-lg line-clamp-1 w-full">
            {anime.name}
          </h2>
        </div>
        <div className="flex gap-4 pl-1  items-center">
          <div className="flex flex-row gap-1 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired} 
              <span className="text-sm"> Episoden</span> 
            </p>
          </div>
      
        </div>
      </div>
  </div>
  );
}

export default AnimeCard;