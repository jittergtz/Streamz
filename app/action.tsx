"use server"
// try out new server actions from next.js 14

import AnimeCard, { AnimeProp } from "@/components/AnimeCard"

// Fetch data from the API and return it through a map in <AnimeCard/>


export const fetchAnime = async (page: number) => {
    const respone = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=12&order=popularity`)
    const data = await respone.json()
    
 
    return   data.map((item: AnimeProp, index :number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ))
    }


