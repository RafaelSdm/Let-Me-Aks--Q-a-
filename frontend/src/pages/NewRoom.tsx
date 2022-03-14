

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'


import {useContext} from 'react'

import {ButtonCounter} from '../components/ButtonCounter'

import {Link} from 'react-router-dom'

import '../styles/auth.scss'
import { AuthContext } from '../contexts/AuthContext'
import { useAuth } from '../hooks/useAuth'






export function NewRoom(){

    const {user} = useAuth()


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
                   
                    <h2>Criar uma nova sala  </h2>
                    
                   

                    <form action="">
                        <input type="text" placeholder='Nome da sala' name="" id="" />

                        <ButtonCounter type='submit'>
                            Criar sala
                        </ButtonCounter>
                    </form>

                    <p>Quer entrar em  uma sala existente? <Link to='/' >Clique aqui</Link></p>

                   
                </div>
            </main>


        </div>
    )
}