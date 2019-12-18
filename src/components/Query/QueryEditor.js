import React from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { updateQuery } from '../../store/actions/queryActions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
require('codemirror/mode/sql/sql')

const QueryEditor = () => {
  const dispatch = useDispatch()
  const queryManager = useSelector(state => state.queryManager)

  return (
    <CodeMirror
      value={queryManager.query}
      options={{
        mode: 'sql',
        theme: 'material',
        lineNumbers: true
      }}
      onBeforeChange={(editor, data, query) => {
        dispatch(updateQuery(query))
      }}
    />
  )
}

export default QueryEditor
