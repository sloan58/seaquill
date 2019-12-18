import React, { Component } from 'react'
import { connect } from 'react-redux'
import Favorite from './Favorite'

export class FavoriteList extends Component {
  editInProgress = () => {}

  render() {
    return this.props.favorites.length ? (
      this.props.favorites.map(favorite => (
        <Favorite favoriteId={favorite.id} key={favorite.id} />
      ))
    ) : (
      <div className='row pb-3'>
        <div className='col-md-8 offset-md-2 text-center'>
          <ul class='list-group'>
            <li class='list-group-item disabled' aria-disabled='true'>
              No Favorites Yet! <br />
              Start sending queries then add them to your favorites.
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  }
}

export default connect(mapStateToProps)(FavoriteList)
