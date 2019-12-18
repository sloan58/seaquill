import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  updateFavorite,
  unfavoriteQuery
} from '../../store/actions/favoriteActions'
import { updateQuery } from '../../store/actions/queryActions'
import { useHistory } from 'react-router-dom'

// reactstrap components
import { Button } from 'reactstrap'

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
    <div className='row pb-3'>
      <div className='col-md-8 offset-md-2'>
        <div className='input-group'>
          <textarea
            id='query'
            type='text'
            className='form-control blockquote'
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
        </div>
      </div>
    </div>
  )
}

export default Favorite
