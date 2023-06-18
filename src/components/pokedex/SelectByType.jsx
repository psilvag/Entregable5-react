import axios from 'axios'
import { useEffect, useState } from 'react'

const SelectByType = ({ setTypeSelected, setCurrentPage }) => {


  const [types, setaTypePokemon] = useState()

  //======================Asynchronous request pokemons======================
  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type'
    axios.get(URL)
      .then(res => setaTypePokemon(res.data.results))
      .catch(err => console.log(err))

  }, [])

  //========FUNCTIONS========================
  const handleChange = e => {
    setTypeSelected(e.target.value)
    setCurrentPage(1)
  }

  return (
    <select className='pokedex-selected' onChange={handleChange} >
      <option value="all pokemons">All pokemons</option>

      {
        types?.map(type => (
          <option
            key={type.url}
            value={type.url}>
            {type.name}
          </option>
        ))
      }
    </select>
  )
}

export default SelectByType