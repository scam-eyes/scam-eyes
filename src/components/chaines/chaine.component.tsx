import React from "react";
import "./chaine.component.css"

class Chaine extends React.Component{
    render(){
        return(
            <div className="globalChaine">
                <div className="descriptionChaine">
                    <img src="../../assets/imgChaine.png" alt="img" className="imgChaine"/>
                    &nbsp;&nbsp;&nbsp;
                    <p className="titreChaine">Titre</p>
                </div>
                <div className="contentChaine">
                    content
                </div>
                <div className="followChaine">
                    follow
                    
                </div>
            </div>
        )
    }
}
export default Chaine;