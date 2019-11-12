import * as React from "react";
import "../css/NavBar.css";

import searchIcon from "../images/search_icon.svg";
import LogoIcon from "../images/sweet_design_logo.svg";

const SearchBar = () => {
  return (
    <div className="SearchBar">

      <div className="Search-Patient"> 
          <input
          type="text"
          className="input"
          id="addInput"
          placeholder="Nome do paciente"
          />
      </div>
      
      <div className="search-icon-container">
        <img src={searchIcon} />
      </div>
    </div>
  );
};



export default class NavBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }


  render(){
    return (
      <div className="NavBar">
        <div className="NameSweetCare">Sweet Care</div>
  
        <div className="EditLogo">
          <img src={LogoIcon} />
        </div>
  
        <div className="SearchContainer">
          <SearchBar />
        </div>
        <div style={{ flex: 4 /*backgroundColor: '#4db6ac'*/ }} />
      </div>
    );
  }
}
