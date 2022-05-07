import React from "react";
import "./acceuil.css";
//import Chaine from "../components/chaines/chaine.component";
import SignIn from "./signin"
import SignUp from "./signup"
class Accueil extends React.Component{
    render(){

        return (
            <div className="global">
                <SignIn/>
                <SignUp/>
            </div>
        )
    }
}

export default Accueil;