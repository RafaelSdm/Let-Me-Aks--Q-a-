import logoImg from '../assets/images/logo.svg'
import {ButtonCounter} from '../components/ButtonCounter'

import {useParams} from 'react-router-dom'

import '../styles/room.scss'

import {RoomCode} from '../components/RoomCode'
import { FormEvent, useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'
import { type } from '@testing-library/user-event/dist/type'
import {Question} from '../components/Question'
import {useRoom} from '../hooks/useRoom'



type RoomParams = {
    id: string;
}















export function  Room() {

    const {user} = useAuth()
  
    const params = useParams<RoomParams>()
    const roomId = params.id;

    const [newQuestion, setNewQuestion] = useState('')
    

    const {title, questions} = useRoom(roomId as string)
    

  




    async function handleSendQuestion(event: FormEvent ){

        event.preventDefault()

        if(newQuestion.trim() === ''){
            return;
        }else{
            if(!user){
                throw new Error(" you mus be logged in");
                
            }
        }


        const question ={
            content: newQuestion,
            author:{
                name: user.name,
                avatar: user.avatar,

            },
            isHighLighted: false,
            isAnswered: false
        };


        await database.ref(`rooms/${roomId}/questions`).push(question);

        setNewQuestion('');

    }   



    return(
        <div id="page-room">

            <header>
                <div className="content">

                    <img src={logoImg} alt="" />
                    <RoomCode code={roomId as string} />

                    
                </div>
            </header>


            <main className='content'>
                <div className='room-title'>
                    <h1>Sala - {title}</h1>
                    {questions.length > 0 && <span>{questions.length} perguntas </span>}
                </div>

                <form onSubmit={handleSendQuestion} >
                    <textarea placeholder='O que voce quer perguntar?' onChange={event => setNewQuestion(event.target.value) } value={newQuestion} />

                    <div className='form-footer'>

                        {user ?(
                            <div className='user-info'>
                                <img src={user.avatar} alt="" />
                                <span>{user.name}</span>
                            </div>
                        ) : (
                            <span>Para fazer uma pergunta, <button>faça seu login</button></span>
                        ) }
                        <ButtonCounter disabled={!user} type='submit'>Enviar Pergunta</ButtonCounter>

                    </div>
                </form>



                <div className='question-list'>

                    {questions.map(question =>{
                        return(
                            <Question
                             key={question.id}
                             content={question.content} 
                             author={question.author}/>
                        )
                    })}

                </div>


               



            </main>

        </div>
    )


    
    
}