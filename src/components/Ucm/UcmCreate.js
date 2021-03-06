import React from 'react'
import { useDispatch } from 'react-redux'
import { createUcm } from '../../store/actions/ucmActions'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from 'reactstrap'

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
    <Row className='justify-content-center'>
      <Col sm={12} md={7} lg={5}>
        <Card className='shadow border-0'>
          <CardBody className='px-lg-5 py-lg-5'>
            <CardTitle className='text-center text-muted mb-4'>
              Add UCM
            </CardTitle>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor='name'>Name</Label>
                <Input type='text' id='name' onChange={handleChange} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='ip'>IP Address</Label>
                <Input type='text' id='ip' onChange={handleChange} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='username'>API Username</Label>
                <Input
                  type='text'
                  id='username'
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='password'>API Password</Label>
                <Input
                  type='password'
                  id='password'
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='version'>API Version</Label>
                <Input type='select' id='version' onChange={handleChange}>
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
                </Input>
              </FormGroup>
              <Button type='submit' color='primary'>
                Submit
              </Button>
              <Link to={'/admin/ucms'}>
                <Button color='light'>Cancel</Button>
              </Link>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default CreateUcm
