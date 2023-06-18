import React from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
const InputSearch = () => {

  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
  }



  return (

    <form className='form-input-pokedex' onSubmit={submit}>
      <input
        className='input-search-pokedex'
        id='search'
        type="text"
        placeholder='Search pokemon' />
      <button className='button-search-pokedex'><AiOutlineSearch className="search-icon"/></button>
    </form>


  )
}

export default InputSearch