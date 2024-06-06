import "./PersonalDetails.css"
import React from 'react';
//Motion 
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants'

const PersonalDetails = () => {
    return (
        <>
            <div className="container">
                <div className="PersonalDetails d-flex align-items-center justify-content-around">
                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="PDLeft">
                        <h5>Personal Details</h5>
                        <p style={{ color: "#303e67" }}>Passionate web developer with 2 Years of experience in creating dynamic and visually appealing websites. Dedicated to delivering high-quality, user-friendly solutions to clients. Currently seeking new opportunities to collaborate and innovate in the ever-evolving world of web development.</p>
                        <div className="links d-flex justify-content-around">
                            <a href="https://github.com/Mudasir472" target="_blank"><i class="bi bi-github"></i></a>
                            <a href="https://x.com/MudduBhat" target="_blank"><i class="bi bi-twitter-x"></i></a>
                            <a href="https://www.linkedin.com/in/mudasir-bhat-553119228/" target="_blank"><i class="bi bi-linkedin"></i></a>
                            <a href="https://www.instagram.com/bhat_muddu_/" target="_blank"><i class="bi bi-instagram"></i></a>
                        </div>

                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="PDRight">
                        <div className="details">
                            <p><span>Date Of Birth</span> : <span className="color-blue">03 - 05 - 2004</span></p>
                            <p><span>Spoken Languages</span> : <span className="color-blue">English Hindi Kashmiri</span></p>
                            <p><span>nationality</span> : <span className="color-blue">Indian</span></p>
                            <p><span>Interests</span> : <span className="color-blue">Music Reading Gym Journey</span></p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default PersonalDetails;