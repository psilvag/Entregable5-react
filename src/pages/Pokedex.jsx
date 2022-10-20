//=========IMPORT HOOKS=========
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

//=========IMPORT COMPONENTS=========
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'

//=========IMPORT  CSS FILES AND IMAGES=========
import '../styles/pokedex/pokedex.css'
import '../styles/pokedex/pokemonCard.css'
import imagePokemonHeader from '../images/pokedex/pokemon-banner.jpg'
import homeicon from '../images/pokedex/home.png'
import configicon from '../images/pokedex/cogwheel.png'



const Pokedex = () => {

  //======================Hooks======================
  const [currentpage, setCurrentPage] = useState(1)
  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('all pokemons')
  const navigate = useNavigate()
  const userName = useSelector(state => state.userNameSlice)
  const cardConfigValue = useSelector(state => state.numberCardsConfig)


  //======================Definition of number of pokemons per page======================
  let cardsNumber
  if (cardConfigValue) {
    cardsNumber = cardConfigValue
  }
  else {
    cardsNumber = 20   //Default numbers pokemons per page
  }
  const [cardsPerPage] = useState(cardsNumber)


  //======================Asynchronous request pokemons======================
  useEffect(() => {
    if (typeSelected !== 'all pokemons') {
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(poke => poke.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))
    }

    else {
      const URL = `https://pokeapi.co/api/v2/pokemon?limit=500&offset=0`

      axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    }
  }, [typeSelected])


  //console.log(pokemons?.length); show all pokemons number 

  //======================Pagination logic======================
  const lastIndexPokemons = currentpage * cardsPerPage
  const firstIndexPokemons = lastIndexPokemons - cardsPerPage
  const currentPokemons = pokemons?.slice(firstIndexPokemons, lastIndexPokemons)


  //======================Functions to navigate======================
  const handleClick = () => {
    navigate('/')
  }
  const handleClickConfig = () => {
    navigate('/config')
  }
  const paginate = numberPage => setCurrentPage(numberPage)

  return (
    <div className='pokedex-general-container'>

      <div className='pokedex-image-header'>
        <img className='image-header' src={imagePokemonHeader} alt="" />
      </div>
      <div className='pokedex-main-container'>
        <div className='pokedex-header'>
          <h1>Welcome <span style={{ color: 'red' }}>{userName}, </span>search your favorite pokemon</h1>
          
          <div className='pokedex-button-navigate'>
            <div className='button-container'>
              <input className='home-button' onClick={handleClick} type="image" src={homeicon} />
              <p>Go home</p>
            </div>
            <div className='button-container'>
              <input className='config-button' onClick={handleClickConfig} type="image" src={configicon} />
              <p>Cards per page</p>
            </div>
          </div>

        </div>

        <div className='pokedex-input-selected'>
          <div className='pokedex-input'>
            <InputSearch />
          </div>
          <div className='pokedex-pag'>
              Pag. {pokemons?.length/cardsPerPage>0? currentpage: '0'}
          </div>
          <div className='pokedex-selected'>
            <SelectByType
              setTypeSelected={setTypeSelected}
              setCurrentPage={setCurrentPage} />
          </div>
        </div>


        <div className='pokedex-pokemons-container'>

          {
            currentPokemons?.map(pokemon => (
              <CardPoke
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          }

        </div>
      </div>

      <div className='pagination-container'>
        <Pagination
          cardsPerPage={cardsPerPage}
          totalCards={pokemons?.length}
          paginate={paginate}
        />
      </div>
    </div>
  )
}

export default Pokedex