import React from "react";
import { Link } from "react-router-dom";
import "../home page/home.css";
import logo1 from "./logo1.png";

function Home() {
  return (
    <div>
      <div className="jumbotron-home">
        <h1 id="landingHeader">Available Tests</h1>
        <h2 id="subHeader" > Get Ready, Stay Ready</h2>
      </div>
      <div className="container-gold-card">
        <div className="row">

          <div className="col-sm">
            <div className="card" id="goldCard">
              {/* <img id="logo" src={logo1} alt="logo"/> */}
              <div className="card-body">
                <h5 className="card-title">Take Tests</h5>
                <p className="card-text">Take tests to show employers, post on LinkedIn, and improve your skills </p>
                <button className="btn btn-primary card-btn"><Link to={"/testSelector"}>Get Ready</Link></button>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="card" id="goldCard">
              {/* <img id="logo" src={logo1} alt="logo"/> */}
              <div className="card-body">
                <h5 className="card-title">Take Courses </h5>
                <p className="card-text">View our courses that prepare your for our tests and your career </p>
                <button className="btn btn-primary card-btn">Coming Soon</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;