import ActualProjects from "./ActualProjects";
import react from "../Images/react.svg"
import js from "../Images/JS.svg"
import html from "../Images/html.svg"
import bootstrap from '../Images/bootstrap.svg'
import mongodb from '../Images/mongodb.svg';
import React from "react";

const AllProject = () =>{
    return (
        <>
            <div className="allProjects d-flex  justify-content-evenly flex-wrap mb-4 mt-4 mt-5">
                <ActualProjects img = {react} project="Shop OP" desc="Trendy Shop OP" link="https://mudasir472.github.io/Shop-OP/" use={["REACTJS","","BOOTSTRAP"]}/>
                <ActualProjects img = {mongodb} project="Convo-Connect" desc="Video Conferencing" link="https://mudasir472.github.io/ConvaConnect/" use={["MONGO","NODEJS","BOOTSTRAP"]}/>
                <ActualProjects img = {js} project="Kashmiri Market" desc="Grocery Store" link="https://mudasir472.github.io/Kashmiri-Market/" use={["JAVASCRIPT","HTML","BOOTSTRAP"]}/>
                <ActualProjects img = {bootstrap} project="Weather App" desc="search weather for city" link="https://mudasir472.github.io/Weather-App-Using-React/" use={["REACT","CSS","BOOTSTRAP"]}/>
                <ActualProjects img = {js} project="Kash-Restaurant" desc="delicious" link="https://mudasir472.github.io/Kashmiri-Restaurant/" use={["JAVASCRIPT","HTML","CSS"]}/>
                <ActualProjects img = {html} project="Tic-Tac-Toe" desc="Play It" link="https://mudasir472.github.io/Tic-Tac-Toe/" use={["HTML","CSS","JAVASCRIPT"]}/>
            </div>
        </>
    )
}

export default AllProject;