import EduExperience from './EduExperience';
import './Education.css'
import React from 'react';
//Motion 
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants'

import school from "../Images/school.png"
import job from "../Images/job.png"

const Education = () => {
    return (
        <>
            <div className="Education">
                <div className="container eduSize d-flex flex-column align-items-center justify-content-evenly ">
                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className=" d-flex flex-column align-items-center justify-content-center">
                        <span className="SBadge1 d-flex flex-column align-items-center justify-content-cente">LIFE EXPERIENCE</span>
                        <h2>Education & Experience</h2>
                        <p className="d-flex flex-column align-items-center justify-content-center">Explore my education and experience. From rigorous training to real-world projects, I bring a wealth of knowledge and skills to every endeavor.</p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="serviceTopics d-flex flex-column align-items-center justify-content-evenly">
                        <EduExperience img={school} e1="BTech CSIT" e2="Higher Secondary" e3="High School" y1="2021-2025" y2="2018-2020" y3="2016-2018" />
                        <EduExperience img={job} e1="IDE Bootchamp" e2="Web Internship" e3="Java DSA" y1="2023" y2="2024" y3="2023" />
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Education;