import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  updateFavorite,
  unfavoriteQuery
} from '../../store/actions/favoriteActions'
import { updateQuery } from '../../store/actions/queryActions'
import { withRouter } from 'react-router-dom'

export class Favorite extends Component {
  state = {
    id: this.props.favorite.id,
    query: this.props.favorite.query,
    editing: false
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleBlur = e => {
    this.setState(
      {
        editing: false
      },
      () => {
        if (this.state.query !== this.props.favorite.query) {
          this.props.updateFavorite(this.state)
        }
      }
    )
  }

  handleFocus = e => {
    this.setState({
      editing: true
    })
  }

  handleDelete = () => {
    this.props.unfavoriteQuery(this.props.favorite)
  }

  handleRun = () => {
    this.props.updateQuery(this.props.favorite.query)
    this.props.history.push('/')
  }

  render() {
    return (
      <div className='row pb-3'>
        <div className='col-md-8 offset-md-2'>
          <div className='input-group'>
            <textarea
              id='query'
              type='text'
              className='form-control'
              value={this.state.query}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
            />
            <div className='input-group-append'>
              {this.state.editing ? (
                <button className='btn btn-warning' type='button'>
                  Editing...
                </button>
              ) : (
                <button
                  className='btn btn-outline-info'
                  type='button'
                  onClick={this.handleRun}
                >
                  Run
                </button>
              )}
              <button
                className='btn btn-outline-danger'
                type='button'
                onClick={this.handleDelete}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    favorite: state.favorites.find(
      favorite => favorite.id === ownProps.favoriteId
    ),
    queryManager: state.queryManager
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateFavorite: favorite => dispatch(updateFavorite(favorite)),
    unfavoriteQuery: favorite => dispatch(unfavoriteQuery(favorite)),
    updateQuery: query => dispatch(updateQuery(query))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Favorite))
