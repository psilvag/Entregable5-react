//=========IMPORT COMPONENTS AND HOOKS=========
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setGlobalCardsConfig } from '../store/slices/numberCardsConfig'

//=========IMPORT  CSS FILES AND IMAGES=========
import '../styles/pokedexConfig/pokedexConfig.css'
import pokemongo from '../images/pokedexConfig/pokemon-goim.png'

const PokedexConfig = () => {

  //=========HOOKS=========
  const [selectedNumberCards, setSelectedNumberCards] = useState({ checked: null })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = e => {
    setSelectedNumberCards({
      checked: e.target.value
    })
  }
  const userName = useSelector(state => state.userNameSlice)

  //=========FUNCTIONS=========
  const submit = e => {
    e.preventDefault()
    dispatch(setGlobalCardsConfig(selectedNumberCards.checked))
    navigate('/pokedex')

  }
  const handleClickCancel = () => {
    navigate('/pokedex')
  }



  return (
    <div className='general-container'>

      <div className='config-container'>
        <div className='config-image-pokedex'>
          <img className='image-config' src={pokemongo} alt="img" />
        </div>

        <div className='configuration'>

          <header className='gretting-container'>
            <h1>Hello, <span>{userName}</span> </h1>
            <p>Choose how many pokemons cards you want to see per page</p>
         </header>

          <form className='config-form-container' onSubmit={submit}>
            <div className='labels-container'>

            <label className='label-form'>4
              <input
                type="radio"
                value='4'
                checked={selectedNumberCards.checked === '4'}
                onChange={handleChange} />

            </label>

            <label className='label-form'>8
              <input
                type="radio"
                value='8'
                checked={selectedNumberCards.checked === '8'}
                onChange={handleChange} />
            </label>

            <label className='label-form'>12
              <input
                type="radio"
                value='12'
                checked={selectedNumberCards.checked === '12'}
                onChange={handleChange} />
            </label>

            <label className='label-form'>16
              <input
                type="radio"
                value='16'
                checked={selectedNumberCards.checked === '16'}
                onChange={handleChange} />
            </label>

            <label className='label-form'>20
              <input
                className='input'
                type="radio"
                value='20'
                checked={selectedNumberCards.checked === '20'}
                onChange={handleChange} />
            </label>
            </div>

            <div className='container-buttons'>

                  <p>Number of cards per Page: <span style={{ color: 'red', fontWeight: 'bold' }}>{selectedNumberCards.checked}</span></p>
                  <div className='buttons'>
                  <button className='config-button-save'>Save</button>
                  <button className='config-button-cancel' onClick={handleClickCancel}>Cancel</button>
                  </div>
                  

            </div>

            
          </form>

  


        </div>

      </div>

    </div>
  )
}

export default PokedexConfig