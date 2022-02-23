import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'


export function Home(){
    return(
        <div>
            <aside>

                <img src={illustrationImg} alt="ilustracao troca perguntas e respostas"/>
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo real  </p>
                
            </aside>

            <main>
                <div>
                    <img src={logoImg} alt="imagem de logo letmeask" />
                    <button>
                        <img src={googleImg} alt="" />
                        Crie sua sala com o google

                    </button>
                    <div>ou entre em uma sala</div>

                    <form action="">
                        <input type="text" placeholder='digite o codigo da sala' name="" id="" />
                    </form>

                    <button>Entrar na sala</button>
                </div>
            </main>


        </div>
    )
}