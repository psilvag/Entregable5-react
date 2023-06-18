import React from 'react'
import { Link } from 'react-router-dom'
//===========IMPORT IMAGES===============
import image404 from '../../images/page404/404-image.png'
const Poke404 = () => {

  return (
    <div className='container-page-404'>
      <div className='container-not-found'>
        <img className='image-404' src={image404} alt="img" />
        <h1>Sorry! Pokemon not found</h1>
        <p>
          <Link to='/pokedex'>
            <span style={{ color: 'white', fontSize: '35px', textDecoration:'none' }}> 
            {`< Return`}
            </span>
          </Link>
        </p>
      </div> 
    </div>
  )
}

export default Poke404