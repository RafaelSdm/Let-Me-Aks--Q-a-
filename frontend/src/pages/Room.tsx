import logoImg from '../assets/images/logo.svg'
import {ButtonCounter} from '../components/ButtonCounter'

import {useParams} from 'react-router-dom'

import '../styles/room.scss'

import {RoomCode} from '../components/RoomCode'


type RoomParams = {
    id: string;
}

export function  Room() {

    const params = useParams<RoomParams>()




    return(
        <div id="page-room">

            <header>
                <div className="content">

                    <img src={logoImg} alt="" />
                    <RoomCode code={params.id as string} />

                    
                </div>
            </header>


            <main className='content'>
                <div className='room-title'>
                    <h1>Sala React</h1>
                    <span>4 perguntas</span>
                </div>

                <form>
                    <textarea placeholder='O que voce quer perguntar?' />

                    <div className='form-footer'>

                        <span>Para enviar uma pergunta, <button>Faca seu login</button></span>
                        <ButtonCounter type='submit'>Enviar Pergunta</ButtonCounter>

                    </div>
                </form>



            </main>

        </div>
    )
    
}