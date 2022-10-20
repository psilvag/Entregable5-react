
//=========IMPORT COMPONENTS=========
import React from 'react'
import FormHome from '../components/home/FormHome'

//=========IMPORT  CSS FILES AND IMAGES=========
import '../styles/home/home.css'
import imagepokemon from '../images/home/pokemon-go-logo-font.png'

const Home = () => {

  return (
    <div className='home-container'>
      <div className='home-pokemon'>
        <div className='home-image'>
          <img className='image-login' src={imagepokemon} alt="image" />
        </div>
        <div className='home-form'>

          <h1>Hello poke friend!</h1>
          <h2>Give me your name to start </h2>
          <FormHome />

        </div>
      </div>

    </div>
  )
}

export default Home