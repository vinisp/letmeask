import { useHistory, useParams } from 'react-router-dom'

import logoImg from '../assets/images/logo.svg'
import deleteImage from '../assets/images/delete.svg'



import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
// import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

import { useRoom } from '../hooks/useRoom';

import '../styles/room.scss'


type RoomParams = {
    id: string;
}

export function AdminRoom(){
  //  const {user} = useAuth();
    const params = useParams<RoomParams>();

    const history = useHistory()
   
    const roomId = params.id;
    const {title, questions} = useRoom(roomId);


    async function handleQuestionDelete(questionId: string){
        if(window.confirm('Tem certeza que quer deletar essa pergunta ?')){
            const questionRef = await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    async function handleEndRoom() {
      await database.ref(`rooms/${roomId}`).update({
          endedAt: new Date(),

      })

      history.push('/')
        
    }

    return(
        <div id="page-room">
            <header>
                <div className="content">

                    <img src={logoImg} alt="" />
                    <div>
                    <RoomCode code={roomId}/>
                    <Button isOutlined
                        onClick={handleEndRoom}
                    >Encerrar Sala</Button>
                    </div>
                </div>
            </header>
            <main className="content">
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span> {questions.length} pergunta(s)</span> } 
                </div>

                <div className="question-list">
                {questions.map((question) => {
                    return(
                        //Algoritmo de reconciliação.
                        <Question
                            key={question.id}
                            content={question.content}
                            author={question.author}
                           
                        >
                            <button
                                type="button"
                                onClick={() => handleQuestionDelete(question.id)

                                }
                                >
                                <img src={deleteImage} alt=""/>
                            </button>
                        </Question>
                    )
                } )}
                </div>
            </main>
        </div>
    );
}