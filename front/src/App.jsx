import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Lobby from './pages/Lobby';
import RuleDescription from './pages/RuleDescription';
import Game from './pages/Game';
import Result from './pages/Result';
import './App.css';


function App() {
  /*　api呼び出し
  const [message, setMessage] = useState('');
  useEffect(() =>{
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[])
  */

  return (
    <div className="App">
      <Router>
        <Switch>

          {/*ロビー画面*/}
          <Route path='/lobby' component={Lobby} />

          {/*ルール説明画面*/}
          <Route path='/rule-description' component={RuleDescription} />

          {/*ゲーム画面*/}
          <Route path='/game' component={Game} />

          {/*結果画面*/}
          <Route path='/result' component={Result} />

          {/*ホーム画面*/}
          <Route path='/' component={Home} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
