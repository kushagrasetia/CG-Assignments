import React from 'react';
import aboutpic from '../Images/about.jpg';
const About=()=>{
    return (
        <>

        <div className="container_fluid">
            <h1>About Us </h1>
            <div className="about_container1">
            <div className="about_container2">
            <h3>Timeless Luxury & Heritage Since 2002</h3>
            <p>WALK THROUGH THE CORRIDORS OF THE TIMELESS LUXURY AND HERITAGE SINCE 1903.</p>
            <p>We are pleased to present Stories from the Hote Grand - a dedicated series that opens
             up a treasure trove of interesting tales and insights from our featured hotels.</p>
            </div>
            <div className="about_container3">
            <img src={aboutpic} alt="about_pic"/>
            </div>
 
            </div>
        </div>
        </>
    )
}
export default About;