import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import PersonInfo from "./components/PersonInfo";
import Centro from "./components/Centro";

/*
import * as firebase from 'firebase'

    const firebaseConfig = {
        apiKey: "AIzaSyB3t1dZNekQcv5m2KqwLRSddHP9BNQcz_8",
        authDomain: "sweetcare-66ff0.firebaseapp.com",
        databaseURL: "https://sweetcare-66ff0.firebaseio.com",
        projectId: "sweetcare-66ff0",
        storageBucket: "sweetcare-66ff0.appspot.com",
        messagingSenderId: "744718778488"
      };

      if (!firebase.apps.length) {
        let firebaseImpl = firebase.initializeApp(firebaseConfig);
        let firebaseDatabase = firebaseImpl.database()
      }
      
class FirebaseService {

  static getDataList = (nodePath, callback, size = 10) => {

      let query = firebaseDatabase.ref(nodePath)
                                 .limitToLast(size);
      query.on('value', dataSnapshot => {
          let items = [];
          dataSnapshot.forEach(childSnapshot => {
              let item = childSnapshot.val();
              item['key'] = childSnapshot.key;
              items.push(item);
          });
          callback(items);
      });

      return query;
  };

  static pushData = (node, objToSubmit) => {
      const ref = firebaseDatabase.ref(node).push();
      const id = firebaseDatabase.ref(node).push().key;
      ref.set(objToSubmit);
      return id;
  };
  
  static remove = (id, node) => {
      return firebaseDatabase.ref(node + '/' + id).remove();
  };

}

*/

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      uid:'Goncalo',
      data: []
    }
  }

/*
  componentDidMount() {
    FirebaseService.getDataList('users', (dataReceived) =>    this.setState({data: dataReceived}))
}
*/


  render() {
    return (
      <div className="app-container">
        <div className="header-container" >
          <NavBar name={this.state.uid}/>
        </div>
        <div className="body-container" >
          <div className="menu-container" >
            <Menu />
          </div>
          <div className="info-container" style = {{backgroundColor:'white'}} >
          <Centro />
         </div>
            
            
          <div className="info-person-container" > 
            <PersonInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
