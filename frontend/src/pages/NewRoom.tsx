

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'


import {useState, FormEvent} from 'react'

import {ButtonCounter} from '../components/ButtonCounter'

import {Link, useNavigate} from 'react-router-dom'


import '../styles/auth.scss'
import { AuthContext } from '../contexts/AuthContext'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'








export function NewRoom(){

    const {user} = useAuth()

    const navigate = useNavigate()


    const[newRoom, setNewRoom] =useState('')

    async function handleCreateRoom(event: FormEvent) {

        event.preventDefault(); // nao dar f5 na pagina


        console.log(newRoom)

        if(newRoom.trim() === ''){
            return;

        }else{


            const roomRef = database.ref('rooms');

            const firebaseRoom = await roomRef.push({
                title: newRoom,
                authorId: user?.id,

                
            })

            navigate(`/rooms/${firebaseRoom.key}`)


        }
        


        
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
                   
                    <h2>Criar uma nova sala  </h2>
                    
                   

                    <form onSubmit={handleCreateRoom} >
                        <input type="text" placeholder='Nome da sala' name="" id="" onChange={event => setNewRoom(event.target.value)} value={newRoom} />

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