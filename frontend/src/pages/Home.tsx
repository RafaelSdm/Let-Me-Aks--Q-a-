import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'

import {useNavigate} from 'react-router-dom'

import {ButtonCounter} from '../components/ButtonCounter'

import '../styles/auth.scss'


export function Home(){


    const navigate = useNavigate();


    function navigateToNewRoom(){
        navigate('/rooms/new')
    }

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
                    <button onClick={navigateToNewRoom} className='btn create-roon'>
                        <img src={googleImg} alt="" />
                        Crie sua sala com o google

                    </button>
                    <div className='separator'>ou entre em uma sala</div>

                    <form action="">
                        <input type="text" placeholder='digite o codigo da sala' name="" id="" />

                        <ButtonCounter type='submit'>
                            Entrar na sala
                       </ButtonCounter>
                    </form>

                   
                </div>
            </main>


        </div>
    )
}