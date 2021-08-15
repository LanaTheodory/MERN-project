import React, {useState, useEffect} from 'react';
import Header from '../components/login/Header';
import BackGroundHomePage from '../components/login/BackGroundHomePage';
import io from 'socket.io-client';

const MainMainPage = () => {
  const [socket] = useState(() => io(':8000'));

   useEffect(() => {
   
    console.log('Is this running?');

    return () => socket.disconnect(true);
    
  }, []);
  socket.on('Welcome', data => console.log(data));


    return (
        <>
        <div>
          <Header/>  
          <div style={{ width: "900px" }}>
        <div
          style={{
            marginLeft: "60%",
            marginTop: "15%",
            justifyContent: "space-evenly",
            display: "flex",
          }}
        >
          <BackGroundHomePage />
        </div>
        </div>
          
        </div>
        </>
    )
}
export default MainMainPage;

