import React from "react";
import "./acceuil.css";
import Chaine from "../components/chaines/chaine.component";

class Accueil extends React.Component{
    render(){

        return (
            <div className="global">
                <Chaine/>
            </div>
        )
    }
}

export default Accueil;