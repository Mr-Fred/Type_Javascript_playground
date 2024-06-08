import Navbar from '@/components/Navbar'
import SearchBar from '@/components/SearchBar'
import React, { ChangeEvent } from 'react'
import {ModeToggle} from '@/components/ModeToggle'
import MediaList from '@/components/MediaList'
import {type TmdbMovie,fetchMovies, formatMovie} from '@/app/_actions/fetchMoviesActions'
import {fetchMovieByTitle} from '@/app/_actions/searchActions'

import {type CardProps} from '@/components/MediaCard'

async function HomePage() {
  const movies: TmdbMovie[] = await fetchMovies()
  let cardData: CardProps[] = movies.map(formatMovie)
  async function searchHandler(e: ChangeEvent){
    e.preventDefault()
    // const response = await fetchMovieByTitle(e.target.value: String)

  }
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl px-2 mx-auto flex justify-end items-center '>
        <SearchBar />
        <ModeToggle />
      </div>
      <MediaList cardData={cardData}/>
    </div>
  )
}

export default HomePage