import "./OurServices.css"
import ServiceTopicsInside from "./serviceTopicsInside";
import React from 'react';
//Motion 
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants'
import img1 from "../Images/awesome.svg";
import img2 from "../Images/dynamic.svg"
import img3 from "../Images/branding.svg"

const OurServices = () => {
    return (
        <>
            <div className="ourServices">
                <div className="ourServicesMain d-flex flex-column align-items-center justify-content-evenly">
                    <div style={{ height: "70vh" }} className="container MT d-flex flex-column justify-content-evenly ">
                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="Services d-flex flex-column align-items-center justify-content-center">
                            <span className="SBadge d-flex flex-column align-items-center justify-content-cente">SERVICES</span>
                            <h2>Our Services</h2>
                            <p className="d-flex flex-column align-items-center justify-content-center">Discover our comprehensive web development services, from custom website design to e-commerce solutions and ongoing support. Let's build your digital success story together.</p>
                        </motion.div>
                        <motion.div 
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="serviceTopics d-flex flex-wrap align-items-center justify-content-evenly">
                            <ServiceTopicsInside img={img1} color="blue" bg="rgba(247, 140, 75, 0.1)" head="Awesome Support" desc="Experience exceptional support catered directly to you. As a solo developer, I'm committed to providing prompt and personalized assistance whenever you require it." />
                            <ServiceTopicsInside img={img2} color="#377dff" bg="rgba(55, 125, 255, 0.1)" head="Dynamic Growth" desc="Unlock dynamic growth opportunities with us. Let's elevate your online presence together." />
                            <ServiceTopicsInside img={img3} color="#69c380" bg="rgba(105, 195, 128, 0.1)" head="Branding Identity" desc="Fashion your unique brand identity with us. Let's craft a memorable digital presence that resonates with your audience." />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServices;