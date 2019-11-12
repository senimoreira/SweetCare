import * as React from "react";
import "../css/PersonInfo.css";
import user_photo, { ReactComponent } from "../images/minhavo.svg";

import * as firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyB3t1dZNekQcv5m2KqwLRSddHP9BNQcz_8",
  authDomain: "sweetcare-66ff0.firebaseapp.com",
  databaseURL: "https://sweetcare-66ff0.firebaseio.com",
  projectId: "sweetcare-66ff0",
  storageBucket: "sweetcare-66ff0.appspot.com",
  messagingSenderId: "744718778488"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const RequireCheckUpButton = props => {
  return <button className="button">Requisitar Check Up</button>;
};

function fetchSomething() {
  console.log("Fetch")
  try{
    firebase.database().ref("/users").set({WebappTest: "Concluido"}).then(result => {console.log(result); return} ).catch(error => console.log(`Error:${error}`))
  }catch(error){
    console.log(error)
    return
  }
  return
}

export default class PersonInfo extends React.Component{
  
  render(){
    return (
      <div className="person-info-container">
        <div className="top-info-container">
          <div className="top-info">
            <div className="top-info-person">
              <div className="top-info-photo-container">
                <img src={user_photo} style={{ width: 70, height: 70 }} />
              </div>
              <div className="top-info-data">
                <div>Inês Moreira</div>
                <div>84 Anos</div>
              </div>
            </div>
            <div className="top-info-extra-info" />
            <div className="top-info-button">
              <RequireCheckUpButton onClick={fetchSomething()}/>
            </div>
          </div>
        </div>
        
        <div className="bottom-info-container" >
          <div className="bottom-info" >
          
          <div style={{paddingTop:20}}>
            <div className = "Next-doctor-appointment" >Próximas Consultas Médicas:</div>  
              <div className = "Rect-bottom-up" >
                  <p>Doutor Rodigez Sanchez </p>
                  <p>Local: Hospital da Luz</p>
                  <p>Data: 04/04/2019</p>
              </div>
          </div>
  
          <div style={{paddingTop:20}}>
            <div className = "Next-doctor-appointment">Medicação</div>
                <div className = "Rect-bottom-down">
                Promazon-13
                </div>
            </div>
          </div>
  
            
        </div>
      </div>
    );
  }
};
