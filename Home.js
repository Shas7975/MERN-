import React from "react"
import sample_home from './images/sample_home.jpg'
import Layout from "./components/layout";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
        <Layout/>
       
        <div class="container">        
        </div>
        
        <div class="home_content" >
        <span><center><h2>Empower through tech education. Explore courses for career growth.</h2></center></span>
        <h2 class="main_text">Learn Professional Skills</h2>
        <p class="main_text">TechSphere Academy: Empowering Minds in the Digital Universe is a professional
                     training institute in Bengaluru. providing quality training
                     in cutting-edge technologies and skills. Our certified trainers
                     equip students with the knowledge, tools, and techniques to help
                     them excel in their chosen fields. Our courses are tailored to 
                     the needs of each individual and are designed to provide maximum value</p>
        </div>     
        </>

    );
};
export default Home;