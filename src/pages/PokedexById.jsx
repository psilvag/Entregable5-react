//====================IMPORT HOOKS AND COMPONENTS==================
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Poke404 from '../components/pokedex/Poke404'

//====================IMPORT STYLES AND IMAGES==================
import '../styles/pokedexbyID/pokedexbyid.css'
import '../styles/page404/404.css'
import portadaPokemon from '../images/pokedexbyID/pokemon-banner-im.jpg'
import buttonback from '../images/pokedexbyID/arrow-icon-rem.png'

const PokedexByid = () => {

  //======================HOOKS ======================
  const { id } = useParams()
  const [pokemon, setPokemon] = useState()
  const [haserror, sethaserror] = useState(false)
  const navigate = useNavigate()

  //======================Asynchronous request only one pokemon======================
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err)
        sethaserror(true)
      })
  }, [])

  //=============FUNCTIONS========================
  if (haserror) {
    return <Poke404/>
  }
  const handleClick = () => {
    navigate('/pokedex')
  }

 //console.log(pokemon)

  return (
    <article className='article-container'>
      <img className='banner-header-image' src={ portadaPokemon } alt="img" />

      <div className='first-container-info'>
        <div className={`container-image bg-${pokemon?.types[0].type.name}`} >
          <img  className='pokemon-image-header' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
          <img onClick={handleClick} className='button-navigate-back' src={buttonback} alt="img" />
          
        </div>

        <div className='container-header-features'>
          <p># <span>{pokemon?.id}</span> </p>
           <h1>{pokemon?.name}</h1>
          <div className='container-info-description'>
              <ul className='ul-info'>
                <li>Weight</li>
                <li>{pokemon?.weight}</li>
              </ul>
              <ul className='ul-info'>
                <li>Height </li>
                <li>{pokemon?.height}</li>
              </ul>
          </div>
        </div>

        <div className='container-info-types-skills'>
          <div className='container-types'>
            <h2>Type</h2>
            <ul className='types-info' >
              {
                pokemon?.types.map(type => (
                  <li className={`types-info bg-${type.type.name} 
                   Letter-${type.type.name}`} key={type.slot}>{type.type.name}</li>
                ))
              }
            </ul>
          </div>

          <div className='container-skills'>
            <h2>Skills</h2>
            <ul className='skills-info'>
              {
                pokemon?.abilities.map(skill => (
                  <li key={skill.slot}>{skill.ability.name}</li>
                ))
              }
            </ul>
          </div>

        </div>

        <div className='container-stats-info'>
          <h2>Stats</h2>
          <ul  className='stats-info'>
            {
              pokemon?.stats.map(stat => (

                <li key={stat.stat.name}>
                  <label htmlFor={stat.stat.name}>{stat.stat.name}: <span>{stat.base_stat} /150</span></label>
                  <progress id={stat.stat.name} value={stat.base_stat} max="150"></progress>
                </li>
              ))
            }
          </ul>
        </div>

      </div>


      <div className='second-container-info-moves'>
         <h2>Moves</h2>
          <ul className='moves-info'>
            {
              pokemon?.moves.slice(0,50).map(move=>(
                <li className={`bg-${pokemon?.types[0].type.name} 
                Letter-${pokemon?.types[0].type.name}`}  key={move.move.name}>{move.move.name}</li>

              ))
            }
          </ul>
      </div>
   </article>
  )
}

export default PokedexByid