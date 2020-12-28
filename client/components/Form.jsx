import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {

  const [ plateNumber, setPlateNumber ] = useState('')

  const handleChange = (e) => {
    setPlateNumber(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/plates', { plateNumber })
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  return (
    <div id='form'>
      <form id='plate-number'>
        <label htmlFor='plate'>Plate Number</label>
        <input type='text' name='plate' placeholder='Enter a plate number' value={plateNumber} onChange={(e) => handleChange(e)} />
        <button type='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default Form