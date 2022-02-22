import {Button} from './components/Button'
import {ButtonCounter} from './components/ButtonCounter'

function App() {



  return (
   <div>
     <h1>Hello world!</h1>
     <Button children="Botao 1"/>
     <Button/>
     <Button>Clique aqui</Button>
     
     <ButtonCounter></ButtonCounter>


   </div>
  );
}

export default App;
