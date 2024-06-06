import React from 'react';
//Motion 
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

import { Typewriter } from 'react-simple-typewriter';
import "./FrontSide.css"
import Photo from "../Images/Photo.png"
import bgImg from "../Images/main-bg.png"

const FrontSide = () => {
    return (
        <>
            <div style={{
                backgroundImage: `url(${bgImg})`,
                backgroundPosition: "center center",
                backgroundSize: "cover"
            }} className="FrontSideSec">
                <div className="container divideIt d-flex justify-content-around align-items-center">
                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="imgSec">
                        <img src={Photo} className="img-fluid ml-lg-5" alt="" />
                    </motion.div>
                    <motion.div    // for motion in left direction
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        
                        className="mainSec d-flex flex-column align-items-center justify-content-between">
                        <h5 style={{ color: "rgb(111, 128, 155)" }}>Hi! This is Mudasir Ahmad Bhat</h5>
                        <h1 style={{fontWeight:"bold"}}>I am a <Typewriter
                        words={['Web Developer', 'Web Designer', 'Designer', 'YouTuber']}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    /></h1>
                        <button type="button" class="btn btn-info text-light"><a style={{ color: "white", textDecoration: "none" }} href="https://drive.google.com/file/d/1bC1CzZejWweLAhiwtD5K-fxG1jswEgiW/view?usp=drive_link" target="_blank">Download CV</a></button>
                    </motion.div>
                </div >
            </div >

        </>
    )
}

export default FrontSide;