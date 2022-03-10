import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'


import {auth, firebase} from '../services/firebase'

import {useNavigate} from 'react-router-dom'

import {ButtonCounter} from '../components/ButtonCounter'

import '../styles/auth.scss'


export function Home(){


    const navigate = useNavigate();


    function handleCreateRoom(){

        const provider = new firebase.auth.GoogleAuthProvider()

        auth.signInWithPopup(provider).then(result =>{
            console.log(result)
            navigate('/rooms/new')
        })


        
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
                    <button onClick={handleCreateRoom} className='btn create-roon'>
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