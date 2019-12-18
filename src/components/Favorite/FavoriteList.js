import React from 'react'
import { useSelector } from 'react-redux'
import Favorite from './Favorite'

const FavoriteList = () => {
  const favorites = useSelector(state => state.favorites)

  return favorites.length ? (
    favorites.map(favorite => (
      <Favorite favoriteId={favorite.id} key={favorite.id} />
    ))
  ) : (
    <div className='row pb-3'>
      <div className='col-md-8 offset-md-2 text-center'>
        <ul className='list-group'>
          <li className='list-group-item disabled' aria-disabled='true'>
            No Favorites Yet! <br />
            Start sending queries, then add them to your favorites list.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FavoriteList
