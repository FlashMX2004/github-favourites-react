import React, { useState } from 'react'
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';
import { IRepo } from '../models/models'

export default function RepoCard({ repo }: {repo: IRepo }) {
    const { addFavourite, removeFavourite } = useActions()
    const { favourites } = useAppSelector(state => state.github)

    const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))
    
    const addToFavourites = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        addFavourite(repo.html_url)
        setIsFav(true)
    }

    const removeFromFavourites = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        removeFavourite(repo.html_url)
        setIsFav(false)
    }
    
  return (
    <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
        <a href={ repo.html_url } target="_blank">
            <h2 className="text-lg font-bold">{ repo.full_name }</h2>
            <p className="text-sm">
                Forks: <span className="font-bold mr-2">{ repo.forks }</span>
                Watchers: <span className="font-bold">{ repo.watchers }</span>
            </p>
            <p className="text-sm font-thin">{ repo?.description }</p>

            { !isFav && <button onClick={ addToFavourites }
                    className="py-2 px-4 mr-2 bg-yellow-400 rounded hover:shadow-md transition-all">
                Add
            </button> }

            { isFav && <button onClick={ removeFromFavourites }
                    className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all">
                Remove
            </button> }
        </a>
    </div>
  )
}