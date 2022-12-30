import { useActions } from "../hooks/actions";
import React, { useState } from 'react'

export default function Favourite({ favourite }: {favourite: string }) {
  const { removeFavourite } = useActions()

  const removeFromFavourites = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeFavourite(favourite)
  }

  return (
    <li key={ favourite } className="py-2">
        <a href={ favourite } target="_blank">{ favourite }</a>
        
        <button onClick={ removeFromFavourites }
                className="py-2 px-4 ml-2 bg-red-400 rounded hover:shadow-md transition-all">
            Remove
        </button>
    </li>
  )
}
