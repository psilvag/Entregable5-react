import './App.css'

import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Pokedex from './pages/Pokedex'
import PokedexByid from './pages/PokedexById'
import PokedexConfig from './pages/PokedexConfig'



function App() {
  

  return (
    <div className="App">
       <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route element={<ProtectedRoutes/>} >
              <Route path='/pokedex' element={<Pokedex/>}  />
              <Route path='/pokedex/:id' element={<PokedexByid/>}  />
              <Route path='/config' element={<PokedexConfig/>}  />
          </Route>
      

     </Routes>
     

    </div>
  )
}

export default App
