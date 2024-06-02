import React from 'react'
import { Tv, Film } from 'lucide-react'

export type iconRenderProps = {
  type: "movie" | "tv"
}


export function TypeIconRender({type}: iconRenderProps) {
  return (
    <div>
      {type === "movie" ? <Film /> :<Tv />}
    </div>
  )
}