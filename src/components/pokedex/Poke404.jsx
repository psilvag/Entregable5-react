import React from 'react'
import { Link } from 'react-router-dom'
//===========IMPORT IMAGES===============
import image404 from '../../images/page404/404-image.png'
const Poke404 = () => {


  return (
    <div className='container-page-404'>
      <div>
        <img className='image-404' src={image404} alt="img" />
      </div>
      <div>
        <h1>Sorry! Pokemon not found</h1>
        <p><Link to='/pokedex'> <span style={{ color: 'brown', fontSize: '25px', textDecoration: 'none' }}> {`< Return to Pokedex page`}</span></Link></p>
      </div>
    </div>
  )
}

export default Poke404