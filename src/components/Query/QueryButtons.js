import React from 'react'
import { submitQuery, clearResults } from '../../store/actions/queryActions'
import { favoriteQuery } from '../../store/actions/favoriteActions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

// Reactstrap Imports
import { Button } from 'reactstrap'

require('codemirror/mode/sql/sql')

export default function QueryButtons() {
  const dispatch = useDispatch()
  const queryManager = useSelector(state => state.queryManager)

  const readyToQuery = queryManager.targets.length && queryManager.query.length

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(clearResults())
    dispatch(submitQuery(queryManager.query, queryManager.targets))
  }

  const handleClear = () => {
    dispatch(clearResults())
  }

  return (
    <React.Fragment>
      <Button
        onClick={handleSubmit}
        color={queryManager.queryInProgress ? 'warning' : 'success'}
        disabled={!readyToQuery}
      >
        {queryManager.queryInProgress ? (
          <React.Fragment>
            <span
              className='spinner-grow spinner-grow-sm'
              role='status'
              aria-hidden='true'
            ></span>
            Query in progress...
          </React.Fragment>
        ) : (
          'Submit Query'
        )}
      </Button>
      {queryManager.results.rows.length > 0 && (
        <React.Fragment>
          <Button onClick={handleClear} className='ml-1' color='light'>
            Clear
          </Button>
          <Button
            onClick={() =>
              dispatch(
                favoriteQuery({
                  id: '',
                  query: queryManager.query
                })
              )
            }
            size='lg'
            alt='Favorite Query'
            color='info'
            className='btn-round btn-icon btn-icon-mini btn-neutral float-right mt-1'
          >
            <i className='now-ui-icons location_bookmark'></i>
          </Button>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}
