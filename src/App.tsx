import {BrowserRouter,Route, Switch } from 'react-router-dom'

/*1 - BrowserRoute, declara que tudo que tiver dentro deste elemento pertence a um conjunto de rotas.
  2 - Route, informações da rota em si, como o caminho dela e a página que vai ser carregada, a rota é descrita no path, e a página em tsx ou jsx é citada em componente={página escolhida}
  3 - Switch, não deixa que carregue duas páginas na mesma rota, ele carrega a primeira rota que satisfaz as condições e pronto! 

*/

import {Home} from './pages/Home'
import {NewRoom} from './pages/NewRoom'
import { Room } from './pages/Room'
import { AdminRoom } from './pages/AdminRoom'

import {AuthContextProvider} from './context/AuthContext'
//AuthContextProvider, foi o contexto criado para verificar se o usuário está logado, isso é muito importante para liberar o acesso as páginas e as funcionalidades da nossa aplicação.

function App() {
  return (
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/rooms/new" exact={true} component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
  )
}

export default App;


//Como era muito conteúdo para assimilar ao decorrer de uma semana, comecei incluir essas anotações, pois gosto muito de escrever e fica mais fácil para revisar futuramente, lembrando que revisar é uma parte muito importante do aprendizado de qualquer coisa, algo que está me ajudando muito é criar outra aplicação além dessa, com algumas coisas diferentes. Lembrando que quando desenvolvi esse projeto eu estava desempregado e tinha como objetivo conseguir alguns freelas e uma vaga de desenvolvedor front-end. 