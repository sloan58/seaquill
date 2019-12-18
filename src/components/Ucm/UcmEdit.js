import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUcm } from '../../store/actions/ucmActions'
import { Link } from 'react-router-dom'

export class EditUcm extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // console.log(this.props)
  }
  // state = {
  //   id: this.props.ucm.id,
  //   name: this.props.ucm.name,
  //   ip: this.props.ucm.ip,
  //   username: this.props.ucm.username,
  //   password: this.props.ucm.password,
  //   version: this.props.ucm.version
  // }
  // handleChange = e => {
  //   this.setState({
  //     [e.target.id]: e.target.value
  //   })
  // }
  // handleSubmit = e => {
  //   e.preventDefault()
  //   this.props.updateUcm(this.state)
  //   this.props.history.push('/ucms')
  // }
  render() {
    return (
      <div className='container pb-5'>
        {/* <div className='row justify-content-center'>
          <div className='col-lg-5 col-md-7'>
            <div className='card shadow border-0'>
              <div className='card-body px-lg-5 py-lg-5'>
                <div className='text-center card-title text-muted mb-4'>
                  <p>Edit UCM</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input
                      value={this.state.name}
                      type='text'
                      className='form-control'
                      id='name'
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='ip'>IP Address</label>
                    <input
                      value={this.state.ip}
                      type='text'
                      className='form-control'
                      id='ip'
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='username'>API Username</label>
                    <input
                      value={this.state.username}
                      type='text'
                      className='form-control'
                      id='username'
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='password'>API Password</label>
                    <input
                      value={this.state.password}
                      type='password'
                      className='form-control'
                      id='password'
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='version'>API Version</label>
                    <select
                      value={this.state.version}
                      className='form-control'
                      id='version'
                      onChange={this.handleChange}
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
                  <Link to={'/ucms'}>
                    <button className='btn btn-link mr-1'>Cancel</button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // let id = ownProps.match.params.id
  // return {
  //   ucm: state.ucms.find(ucm => ucm.id.toString() === id)
  // }
}

const mapDispatchToProps = dispatch => {
  // return {
  //   updateUcm: ucm => dispatch(updateUcm(ucm))
  // }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUcm)
