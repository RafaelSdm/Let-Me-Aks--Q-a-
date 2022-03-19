
import {createContext, useState, useEffect} from 'react'


import {Button} from './components/Button'
import {ButtonCounter} from './components/ButtonCounter'



import {Route, BrowserRouter, Routes} from 'react-router-dom'

import {auth, firebase} from './services/firebase'

import {Home} from './pages/Home'
import {NewRoom} from './pages/NewRoom'
import { Room } from './pages/Room'
import{AdminRoom} from './pages/AdminRoom'

import {AuthContextProvider} from './contexts/AuthContext'









function App() {

  

  return (

    <BrowserRouter>

      
      <AuthContextProvider  >

        

      <Routes>
            
            <Route path='/'  element={<Home/>}  />
            <Route path='/rooms/new' element={<NewRoom/>} />
            <Route path='/rooms/:id' element={<Room/>}/>
            <Route path='/admin/rooms/:id' element={<AdminRoom/>} />
        </Routes>

      </AuthContextProvider>
      

      

    

      
    
    </BrowserRouter>

   
  );
}

export default App;
