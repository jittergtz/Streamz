"use client"
import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import {useInView } from "react-intersection-observer"
import AnimeCard from "./AnimeCard";




// to load more data when needed we use the "react-intersection-observer" package to check if the user 
// is inView of the loading spinner, if so we fetch more data from the APi trhough useEffect hook 



// Page starts with 2 and increment (+1) everytime we call the API
// to see new pages of data (Animes) everytime the API gets called
// in @/app/action we defined page as Prop and put it in the API url to fetch new data everytime we call.
let page = 2
export type AnimeCard = JSX.Element

function LoadMore() {
  const {ref, inView} = useInView()
  const [data, setData] = useState<AnimeCard[]>([])
  
  useEffect(() =>{

    if(inView){
      fetchAnime(page)
      .then((res) => {
        setData([...data, ...res])
        
      })
      page++
    }
  }, [inView, data])
  return (
    <> 
<div className="flex justify-center ">

    <div className="mx-auto rounded-xl z-10 backdrop-blur-lg bg-neutral-950/10 p-3 ">
    <section className="mx-auto grid xl:grid-cols-6  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10">
     {data}
    </section>
    </div>
    </div>


     
     
    
    
      <section className="flex justify-center my-10 items-center w-full">
        <div ref={ref}>
          <Image
            src="./tail-spin.svg"
            alt="spinner"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;