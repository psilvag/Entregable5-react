import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const CardPoke = ({ url }) => {

    //======================Hooks======================
    const [pokemon, setPokemon] = useState()
    const navigate = useNavigate()

    //======================Asynchronous request pokemon card======================
    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))

            .catch(err => console.log(err))

    }, [])

    //console.log(pokemon);

    //======================Functions to navigate ======================
    const handleClick = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }


    //console.log(pokemon?.types[0].type.name);

    return (
        <article className={`pokemon-container-article bg-${pokemon?.types[0].type.name} 
                     border-${pokemon?.types[0].type.name} letter-${pokemon?.types[0].type.name}`}
            onClick={handleClick}>

            <header className='pokemon-container-header'>
                <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="img-pokemon" />
            </header>

            <div className='card-info'>
                <section className='pokemon-section-info'>
                    <h1>{pokemon?.name}</h1>
                    <ul className='pokemos-types'>
                        {
                            pokemon?.types.map(type => (
                                <li key={type.slot}>{type.type.name}</li>
                            ))
                        }
                    </ul>
                </section>

                <ul className='pokemons-stats'>
                    {
                        pokemon?.stats.map(stat => (
                            <li key={stat.stat.name}>
                                <div className='stats-span'>
                                    <span className='span-description'>{stat.stat.name}</span>
                                    <span className='span-valor'>{stat.base_stat}</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </article>
    )
}

export default CardPoke