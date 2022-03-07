import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'

import {ButtonCounter} from '../components/ButtonCounter'

import '../styles/auth.scss'


export function NewRoom(){
    return(
        <div id='page-auth'>
            <aside>

                <img src={illustrationImg} alt="ilustracao troca perguntas e respostas"/>
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo real  </p>
               
                
            </aside>

            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="imagem de logo letmeask" />
                   
                    <h2>Criar uma nova sala</h2>

                    <form action="">
                        <input type="text" placeholder='Nome da sala' name="" id="" />

                        <ButtonCounter type='submit'>
                            Criar sala
                        </ButtonCounter>
                    </form>

                    <p>Quer entrar em  uma sala existente? <a href="#">Clique aqui</a></p>

                   
                </div>
            </main>


        </div>
    )
}