import logo from "./logo.svg";
import "./App.css";
import Header from "./components/login/Header";
import Registeration from "./views/Registeration";
import PostComment from './components/PostComponent/Post';
import { Router } from '@reach/router';
import MainPage from './views/MainPage';

function App() {
  return (
    <div className="App">
      {/* <Registeration /> */}
      <Header pageTitle="Axsos" />
     <Router>
       {/* <MainPage path="/"></MainPage> */}
     </Router>
    </div>
  );
}

export default App;
