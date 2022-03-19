import {useState, useEffect} from 'react'
import {database} from '../services/firebase'



type QuestionType = {
    id: string;
    author: {
        name: string;
        avatar: string;
    };

    content: string;
    isAnswered: boolean;
    isHighLighted: boolean;

}



type FirebaseQuestions = Record<string, {
    author:{
        name: string;
        avatar: string;
    };

    content: string;
    isAnswered: boolean;
    isHighLighted: boolean;
}>


export function useRoom(roomId: string){

    const[questions, setQuestions] = useState<QuestionType[]>([])
    const[title, setTitle] = useState('')





    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`)

       

        roomRef.on('value', room => {
           // console.log(room.val())
            const databaseRoom = room.val();
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {

                return{
                    id: key,
                    content: value.content,
                    author: value.author,   
                    isAnswered: value.isAnswered,
                    isHighLighted: value.isHighLighted
                    

                }

                


            })

            //console.log(parsedQuestions)
            setTitle(databaseRoom.title)
            setQuestions(parsedQuestions)
            
        })

        
    }, [roomId])


    return{questions, title}

}