import React from 'react';
import Header from '../components/login/Header';
import BackGroundHomePage from '../components/login/BackGroundHomePage';
const MainMainPage = () => {
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

