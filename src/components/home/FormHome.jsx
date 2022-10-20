import React from 'react'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setGlobalUser } from '../../store/slices/userNameSlice'

import pokebola from '../../images/home/pokebola.png'
const FormHome = () => {

const dispatch=useDispatch()
const navigate=useNavigate()

const submit=(e)=>{
    e.preventDefault()
    const userName=e.target.firstChild.value.trim()
    dispatch(setGlobalUser(userName))
    navigate('/pokedex')
}

  return (
    <div className='form-container'>
         <form className='form-pokedex' onSubmit={submit}>
         <input className='form-pokedex-input' type="text"  placeholder='Enter your name' />
         <input className='form-home-button' type="image" src={pokebola}/>
        
         </form>
    </div>
  )
}

export default FormHome