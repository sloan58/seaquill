import React from 'react'
import Select from 'react-select'
import { updateTargets } from '../../store/actions/queryActions'
import makeAnimated from 'react-select/animated'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

// reactstrap components
import { Col, Row } from 'reactstrap'

const TargetSelector = () => {
  const dispatch = useDispatch()
  const queryManager = useSelector(state => state.queryManager)
  const ucms = useSelector(state => state.ucms)

  const animatedComponents = makeAnimated()

  const selectStyles = {
    menu: base => ({
      ...base,
      zIndex: 100
    })
  }

  return (
    <Row>
      <Col sm='12' md={{ size: 8, offset: 2 }}>
        <Select
          placeholder='Select Query Targets...'
          styles={selectStyles}
          defaultValue={queryManager.targets}
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={ucms.map(ucm => {
            return { label: ucm.name, value: ucm.id }
          })}
          onChange={e => dispatch(updateTargets(e ? e : []))}
        />
      </Col>
    </Row>
  )
}

export default TargetSelector
