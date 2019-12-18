import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { updateUcm } from '../../store/actions/ucmActions'
import { Link } from 'react-router-dom'

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

const EditUcm = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const params = useParams()

  const ucm = useSelector(state =>
    state.ucms.find(ucm => ucm.id.toString() === params.id)
  )

  const [input, setInput] = useState(ucm)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(updateUcm(input))
    history.push('/admin/ucms')
  }

  return (
    <Row className='justify-content-center'>
      <Col sm={12} md={7} lg={5}>
        <Card className='shadow border-0'>
          <CardBody className='px-lg-5 py-lg-5'>
            <CardTitle className='text-center text-muted mb-4'>
              Edit UCM
            </CardTitle>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor='name'>Name</Label>
                <Input
                  type='text'
                  id='name'
                  value={input.name}
                  onChange={e =>
                    setInput({ ...input, [e.target.id]: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='ip'>IP Address</Label>
                <Input
                  value={input.ip}
                  type='text'
                  id='ip'
                  onChange={e =>
                    setInput({ ...input, [e.target.id]: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='username'>API Username</Label>
                <Input
                  value={input.username}
                  type='text'
                  id='username'
                  onChange={e =>
                    setInput({ ...input, [e.target.id]: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='password'>API Password</Label>
                <Input
                  value={input.password}
                  type='password'
                  id='password'
                  onChange={e =>
                    setInput({ ...input, [e.target.id]: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='version'>API Version</Label>
                <Input
                  value={input.version}
                  id='version'
                  onChange={e =>
                    setInput({ ...input, [e.target.id]: e.target.value })
                  }
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

export default EditUcm
