import React from 'react'
import { useSelector } from 'react-redux'
import Favorite from './Favorite'

// reactstrap components
import { Col, ListGroup, ListGroupItem, Row } from 'reactstrap'

const FavoriteList = () => {
  const favorites = useSelector(state => state.favorites)

  return favorites.length ? (
    favorites.map(favorite => (
      <Favorite favoriteId={favorite.id} key={favorite.id} />
    ))
  ) : (
    <Row>
      <Col sm={12} md={{ size: 8, offset: 2 }} className='text-center'>
        <ListGroup>
          <ListGroupItem className='disabled' aria-disabled='true'>
            No Favorites Yet! <br />
            Start sending queries, then add them to your favorites list.
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  )
}

export default FavoriteList
