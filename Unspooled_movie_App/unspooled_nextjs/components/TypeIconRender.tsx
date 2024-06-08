import React from 'react'
import { Tv, Film } from 'lucide-react'

export type iconRenderProps = {
  type: "movie" | "tv"
}


export function TypeIconRender({type}: iconRenderProps) {
  return (
    <div>
      {type === "movie" ? <div className="type-icon flex "><Film /><p>Movie</p></div> :<><Tv /><p>TV Series</p></>}
    </div>
  )
}