import {useHistory} from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import {Button} from '../components/Button'


import '../styles/auth.scss'



//webpack

export function Home(){
    const history = useHistory();
    const {signInWithGoogle, user } = useAuth()

   async function HandleCreateRom(){
        if(!user){
            await signInWithGoogle()
        }

        history.push('/rooms/new');
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas"/>
                <strong>Crie salas de perguntas e respostas ao vivo. </strong>
                <p>Tire as dúvidas da galera em tempo real.</p>
            </aside>
            <main>
                
                <div className="main-content">
                    <img src={logoImg} alt="letmeask"/>
                    <button
                    onClick={HandleCreateRom} className="createRoom">
                        <img src= {googleIconImg} alt="logo do google"/>
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}