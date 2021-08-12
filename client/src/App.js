import "./App.css";
import Header from "./components/login/Header";
import Registeration from "./views/Registeration";
// import PostComment from './components/PostComponent/Post';
import { Router } from '@reach/router';
import MainPage from './views/MainPage';
import AboutAXSOS from "./components/aboutAxsos/AboutAXSOS";
// import { Slider } from "@material-ui/core";
import ImagesSlider from "./components/aboutAxsos/ImagesSlider";
function App() {
  return (
    <div className="App">
     {/* <Router>
      <Registeration path="/register" />
      <Header path="/" pageTitle="Axsos" />
       <MainPage path="/"></MainPage>
     </Router> */}
     {/* <ImagesSlider/> */}
     <AboutAXSOS/>
     {/* <Header/> */}
      {/* <Registeration /> */}
     <Router>
      <Registeration path="/register" />
      <Header path="/" pageTitle="Axsos" />
       <MainPage path="/"></MainPage>
     </Router>
     <Header/>
   
    </div>
  );
}

export default App;
