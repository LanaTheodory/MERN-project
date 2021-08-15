import "./App.css";
import Header from "./components/login/Header";
import Registeration from "./views/Registeration";
// import PostComment from './components/PostComponent/Post';
import { Router } from "@reach/router";
import MainPage from "./views/MainPage";
import AboutAXSOS from "./components/aboutAxsos/AboutAXSOS";
import MainMainPage from "./views/MainMainPage";
import ScriptTag from 'react-script-tag';

// import { Slider } from "@material-ui/core";

function App() {
  <ScriptTag src="./socket.js" />
  return (
    //   {/* <Header/> */}
    <Router>
      <Registeration path="/" />
      <MainMainPage path="/home" />
      <MainPage path="/:id" />
      <AboutAXSOS path="/about" />
    </Router>
  );
}

export default App;
