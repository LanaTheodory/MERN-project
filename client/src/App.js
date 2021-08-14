import "./App.css";
import Header from "./components/login/Header";
import Registeration from "./views/Registeration";
// import PostComment from './components/PostComponent/Post';
import { Router } from "@reach/router";
import MainPage from "./views/MainPage";
import AboutAXSOS from './components/aboutAxsos/AboutAXSOS'

// import { Slider } from "@material-ui/core";

function App() {
  return (
    //   {/* <Header/> */}
      <Router>
       <Registeration path="/" />
        <MainPage path="/:id" />
        <AboutAXSOS path="/about"/>
      </Router>
      
  );
}

export default App;
