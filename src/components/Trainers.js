import React from "react";
import "../style/trainers.css";
import "bootstrap-icons/font/bootstrap-icons.json";

const Trainers = () => {
  return (
    <div id="trainers">
      <section className="p-4">
        <div className="container trainers">
          <u>
            <h2 className="py-3">Trainers</h2>
          </u>

          <div className="row align-items-center p-2" id="mal">
            <div className="col-md">
              <div className="my-3">
                <img
                  src={require("../pics/malcWebPic.jpg")}
                  alt="Malcolm Williams"
                />
                <h3 className="my-3">Malcolm Williams</h3>
              </div>
            </div>
            <div className="col-md">
              <div>
                {/* May add some info about trainer here
                <p className="lead">
                  
                </p> */}
              </div>
              <div>
                <strong>
                  <p>Email: mjwhomerun@outlook.com</p>
                  <p>Phone: (610) 427-3006</p>
                </strong>
                <a
                  href="https://www.instagram.com/malcolm___williams/"
                  className="text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="h2 bi bi-instagram mx-2"></span>
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row align-items-center p-2 my-3" id="mal">
            <div className="col-md">
              <div className="my-3">
                <img
                  src={require("../pics/AidanPortraitResized.jpeg")}
                  alt="Aidan Carroll"
                />
                <h3 className="my-3">Aidan Carroll</h3>
              </div>
            </div>
            <div className="col-md">
              <div>
                {/* <p className="lead">
                  
                </p> */}
              </div>
              <div>
                <strong>
                  <p>Email: aidan.carroll6@gmail.com</p>
                  <p>Phone: (484) 844-1140</p>
                </strong>
                <a 
                href="https://www.instagram.com/aidan.carroll/" 
                className="text-dark"
                target="_blank"
                rel="noreferrer"
                >
                  <span className="h2 bi bi-instagram mx-2"></span>
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row align-items-center p-2" id="mal">
            <div className="col-md">
              <div className="my-3">
                <img
                  src={require("../pics/PierfyResized.jpeg")}
                  alt="Malcolm Williams"
                />
                <h3 className="my-3">Phil Pierfy</h3>
              </div>
            </div>
            <div className="col-md">
              <div>
                {/* May add some info about trainer here
                <p className="lead">
                  
                </p> */}
              </div>
              <div>
                <strong>
                  <p>Email: pierfyp@arcadia.edu</p>
                  <p>Phone: (484) 560-9111</p>
                </strong>
                <a
                  href="https://www.instagram.com/ppierfy/"
                  className="text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="h2 bi bi-instagram mx-2"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
