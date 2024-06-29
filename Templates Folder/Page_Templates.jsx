// import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link
  } from "react-router-dom";
  import NavBar from "./Pages/NavBar";
  import Header from "./Pages/Components/Header";
  import Tours from "./Pages/Tours/Tours";
  import Events from "./Pages/Events/Events";
  import Contact from "./Pages/Contact/Contact";
  import Footer from "./Pages/Components/Footer";
  // import Tour1 from "./Pages/Tours/Tour1";
  import "./App.css";
  
  // I need to import pages - went with React-router-dom
  
// Routes function here
  
  const Home = () => {
    return (
      <>
        <div className="pageContainer">
          <div className="HeaderContainer">
            <div className="NavBar">
              <NavBar />
            </div>
            <Header />
          </div>
  
          <div className="contentComponent1">
            <div className="shadow">
              <h3>Title</h3>
              <div className="contentComponent1Image">
                <img src="image" alt="" />
              </div>
              <div className="contentComponent1Info">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
  
          <div className="contentComponent2">
            <div className="shadow">
              <h3>Title</h3>
             
              <div className="contentComponent2Image">
              <Link to="/Tours"><img src="Image" alt="" /></Link>
                <div className="contentComponent2Info"> </div>
                <p></p>
              </div>
            </div>
          </div>
  
          <div className="contentComponent3">
            <div className="shadow">
              <h3>Title</h3>
              <div className="contentComponent3Image">
              <Link to="/Events"><img src="Image" alt="" /></Link>
              </div>
              <div className="contentComponent3Info">
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
  
          <div className="contentComponent4">
            <div className="shadow">
              <h3>Title</h3>
              <div className="contentComponent4Image">
              <Link to="/Contact"><img src="Image" alt="" /></Link>
                <div className="contentComponent4Info">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </>
    );
  };
  export default App;
  