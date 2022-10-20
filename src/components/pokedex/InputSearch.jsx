import React from 'react'
import { useNavigate } from 'react-router-dom'

const InputSearch = () => {

  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
  }



  return (
    <div className='form-input-pokedex'>
      <form onSubmit={submit}>
        <input
          className='input-search-pokedex'
          id='search'
          type="text"
          placeholder='Search pokemon' />
        <button className='button-search-pokedex' >Search</button>
      </form>

    </div>
  )
}

export default InputSearch