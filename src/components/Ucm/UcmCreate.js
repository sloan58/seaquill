import React from 'react'
import { useDispatch } from 'react-redux'
import { createUcm } from '../../store/actions/ucmActions'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const CreateUcm = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const ucm = {
    id: '',
    name: '',
    ip: '',
    username: '',
    password: '',
    version: '12.5'
  }
  const handleChange = e => {
    ucm[e.target.id] = e.target.value
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(ucm)
    dispatch(createUcm(ucm))
    history.push('/admin/ucms')
  }

  return (
    <div className='container pb-5'>
      <div className='row justify-content-center'>
        <div className='col-lg-5 col-md-7'>
          <div className='card shadow border-0'>
            <div className='card-body px-lg-5 py-lg-5'>
              <div className='text-center card-title text-muted mb-4'>
                <p>Add UCM</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='name'>Name</label>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='ip'>IP Address</label>
                  <input
                    type='text'
                    className='form-control'
                    id='ip'
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='username'>API Username</label>
                  <input
                    type='text'
                    className='form-control'
                    id='username'
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>API Password</label>
                  <input
                    type='password'
                    className='form-control'
                    id='password'
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='version'>API Version</label>
                  <select
                    className='form-control'
                    id='version'
                    onChange={handleChange}
                  >
                    <option value='12.5'>12.5</option>
                    <option value='12.0'>12.0</option>
                    <option value='11.5'>11.5</option>
                    <option value='11.0'>11.0</option>
                    <option value='10.5'>10.5</option>
                    <option value='10.0'>10.0</option>
                    <option value='9.1'>9.1</option>
                    <option value='9.0'>9.0</option>
                    <option value='8.5'>8.5</option>
                    <option value='8.0'>8.0</option>
                    <option value='7.1'>7.1</option>
                    <option value='7.0'>7.0</option>
                  </select>
                </div>
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
                <Link to={'/admin/ucms'}>
                  <button className='btn btn-link mr-1'>Cancel</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateUcm
