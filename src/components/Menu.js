import React from "react";
import "../css/Menu.css";

const FieldButton = props => {
  return <div className="FieldButtonContainer">{props.text}</div>;
};

const Menu = () => {
  return (
    <div className="MainContainer">
      <div className="TopContainer">
        <FieldButton text="Menu Principal" />
        <FieldButton text="Medicação" />
        <FieldButton text="Mensagens" />
        <FieldButton text="Nova Consulta" />
      </div>

      <div className="BottomContainer">
        <div className="Whitebox">
          <div className="title">
          CONTACTOS
          </div>
              <div className="text" style = {{padding: '6px'}}>
                Filho: +351 911548366
                Filha: +351 911749274
                Irmão: +351 927394759

              </div>
        </div>
        
      </div>
    </div>
  );
};

export default Menu;
