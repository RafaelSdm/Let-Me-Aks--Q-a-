import logoImg from '../assets/images/logo.svg'


import {useParams, useNavigate} from 'react-router-dom'

import '../styles/room.scss'

import {RoomCode} from '../components/RoomCode'
import { FormEvent, useState, useEffect} from 'react'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'
import { type } from '@testing-library/user-event/dist/type'
import {Question} from '../components/Question'
import {useRoom} from '../hooks/useRoom'
import { ButtonCounter } from '../components/ButtonCounter'
import deleteImg from '../assets/images/delete.svg'
import checkImg from '../assets/images/check.svg'
import answerImg from '../assets/images/answer.svg'




type RoomParams = {
    id: string;
}







export function  AdminRoom() {

    const {user} = useAuth()

    const navigate = useNavigate()
  
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




    async function handleDeleteQuestion(questionId: string) {

        if(window.confirm("Tem certeza que deseja excluir esta pergunta?")){

            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()

        }

        

        
    }


    async function handleEndRoom(){
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date()
        })

        navigate("/")
    }



    async function  handleCheckQuestionAsAnswer(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true,
        })
        
    }


    async function handleHightLightQuestion(questionId: string){

        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            
            isHighLighted: true,
        })



        


    }



    return(
        <div id="page-room">

            <header>
                <div className="content">

                    <img src={logoImg} alt="" />

                    <div>
                        <RoomCode code={roomId as string}/>
                        <ButtonCounter onClick={handleEndRoom} isOutlined >Encerrar Sala</ButtonCounter>
                    </div>
                    

                    
                </div>
            </header>


            <main className='content'>
                <div className='room-title'>
                    <h1>Sala - {title}</h1>
                    {questions.length > 0 && <span>{questions.length} perguntas </span>}
                </div>

               



                <div className='question-list'>

                    {questions.map(question =>{
                        return(
                            <Question
                             key={question.id}
                             content={question.content} 
                             author={question.author}
                             isAnswered = {question.isAnswered}
                             isHighLighted = {question.isHighLighted}
                             
                             >


                                 {!question.isAnswered && (
                                     <>
                                        <button type='button' onClick={() =>          handleCheckQuestionAsAnswer(question.id)} >
                                        <img src={checkImg} alt="" />
                                        </button>
  
                                        <button type='button' onClick={() => handleHightLightQuestion(question.id)} >
                                            <img src={answerImg} alt="" />
                                        </button>


                                     </>
                                  

                                 )}


                               


                                <button type='button' onClick={() => handleDeleteQuestion(question.id)} >
                                    <img src={deleteImg} alt="" />
                                </button>

                             </Question>
                        )
                    })}

                </div>


               



            </main>

        </div>
    )


    
    
}