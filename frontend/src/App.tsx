import {Button} from './components/Button'
import {ButtonCounter} from './components/ButtonCounter'



import {Route, BrowserRouter, Routes} from 'react-router-dom'

import {Home} from './pages/Home'
import {NewRoom} from './pages/NewRoom'

function App() {



  return (

    <BrowserRouter>

      <Routes>
          <Route path='/'  element={<Home/>}  />
          <Route path='/rooms/new' element={<NewRoom/>} />
      </Routes>

      
    
    </BrowserRouter>

   
  );
}

export default App;
