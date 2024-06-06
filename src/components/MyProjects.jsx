import React from 'react';
//Motion 
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants'

import { useState } from "react";
import AllProject from "../IsProjects/AllProject";
import "./MyProjects.css"
import Bootstrap from "../IsProjects/Bootstrapp";
import Reactjs from "../IsProjects/Reactjs";
import JS from "../IsProjects/JS";
import NodeJS from "../IsProjects/NodeJS";
const MyProjects = () => {
    const [Active, setActive] = useState('All');
    const [target, setTarget] = useState('All');

    return (
        <>
            <div className="myProjects">
                <div className="container">
                    <div className="projectsMain d-flex flex-column align-items-center justify-content-evenly">
                        <motion.div
                            variants={fadeIn("left", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="work d-flex flex-column align-items-center justify-content-center">
                            <span className="SBadge d-flex flex-column align-items-center justify-content-cente">WORK</span>
                            <h2>My Projects</h2>
                            <p style={{ width: "77%" }} className="d-flex flex-column align-items-center justify-content-center">Dive into a world of innovation and creativity with my portfolio. From eye-catching designs to seamless functionality, each project is a testament to my dedication to pushing the boundaries of web development. Let's create something extraordinary together</p>
                        </motion.div>
                        <div className="projectsNav ">
                            <div className="lists border-bottom ">
                                <ul  className="d-flex ulStyle align-items-center justify-content-evenly mb-5">
                                    <li className={`${Active === 'All' ? 'active' : ''} d-flex align-items-center justify-content-evenly`} onClick={() => { setActive("All"); setTarget("All") }}>All</li>
                                    <li className={`${Active === 'Bootstrap' ? 'active' : ''} d-flex align-items-center justify-content-evenly`} onClick={() => { setActive("Bootstrap"); setTarget("Bootstrap") }}>Bootstrap</li>
                                    <li className={`${Active === 'JS' ? 'active' : ''} d-flex align-items-center justify-content-evenly`} onClick={() => { setActive("JS"); setTarget("JS") }}>Javascript</li>
                                    <li className={`${Active === 'React' ? 'active' : ''} d-flex align-items-center justify-content-evenly`} onClick={() => { setActive("React"); setTarget("React") }}>React</li>
                                </ul>
                            </div>
                        </div>
                        <div className="project">
                            <motion.div
                                variants={fadeIn("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}
                                className="projectMain">
                                <div className="projectInside">
                                    {target === 'All' ? <AllProject /> : ''}
                                    {target === 'Bootstrap' ? <Bootstrap /> : ''}
                                    {target === 'JS' ? <JS /> : ''}
                                    {target === 'React' ? <Reactjs /> : ''}

                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProjects;