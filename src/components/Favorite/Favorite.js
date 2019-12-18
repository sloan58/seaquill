import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  updateFavorite,
  unfavoriteQuery
} from '../../store/actions/favoriteActions'
import { updateQuery } from '../../store/actions/queryActions'
import { useHistory } from 'react-router-dom'

// reactstrap components
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap'

const Favorite = ({ favoriteId }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const favorite = useSelector(state =>
    state.favorites.find(favorite => favorite.id === favoriteId)
  )
  const [input, setInput] = useState(favorite)
  const [editing, setEditing] = useState(false)

  const handleBlur = e => {
    setEditing(false)
    if (input.query !== favorite.query) dispatch(updateFavorite(input))
  }

  const handleRun = () => {
    dispatch(updateQuery(favorite.query))
    history.push('/')
  }

  return (
    <Row>
      <Col sm={12} md={{ size: 8, offset: 2 }}>
        <Form>
          <FormGroup className='input-group'>
            <Input
              type='textarea'
              name='query'
              id='query'
              className='blockquote'
              value={input.query}
              onChange={e =>
                setInput({ ...input, [e.target.id]: e.target.value })
              }
              onBlur={handleBlur}
              onFocus={() => setEditing(true)}
            />
            {editing ? (
              <div className='spinner-grow text-warning mt-3' role='status'>
                <span className='sr-only'>Loading...</span>
              </div>
            ) : (
              <Button
                color='success'
                onClick={handleRun}
                className='btn-round btn-icon btn-icon-mini btn-neutral'
              >
                <i className='now-ui-icons media-1_button-play'></i>
              </Button>
            )}
            <Button
              color='danger'
              onClick={() => dispatch(unfavoriteQuery(favorite))}
              className='btn-round btn-icon btn-icon-mini btn-neutral'
            >
              <i className='now-ui-icons ui-1_simple-remove'></i>
            </Button>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  )
}

export default Favorite
