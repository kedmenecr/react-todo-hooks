import React, { useState } from 'react'

const userInputValue = initVal => {
  const [value, setValue] = useState(initVal)
  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue('')
  }
}

export default ({ onSubmit }) => {
  const { resetValue, ...text } = userInputValue('')
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSubmit(text.value)
        resetValue()
      }}
    >
      <input {...text} />
    </form>
  )
}
