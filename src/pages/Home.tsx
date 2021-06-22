import { useContext } from 'react'
import {useHistory} from 'react-router-dom'

import {auth ,firebase} from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import {Button} from '../components/Button'
import {TestContext} from '../App'

import '../styles/auth.scss'

//webpack

export function Home(){
    const history = useHistory();
    const value = useContext(TestContext)
    function HandleCreateRom(){

        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            console.log(result);

            history.push('/rooms/new');
        })
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas"/>
                <strong>Crie salas de perguntas e respostas ao vivo. </strong>
                <p>Tire as dúvidas da galera em tempo real.</p>
            </aside>
            <main>
                <h1>{value}</h1>
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