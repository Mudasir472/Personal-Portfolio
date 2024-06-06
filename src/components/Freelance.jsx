import "./Freelance.css"
import React from 'react';
//Motion 
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants'
const Freelance = () => {
    return (
        <>
            <div className="freelance shadow-sm bg-body-tertiary d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="freelanceMain d-flex align-items-center justify-content-evenly">
                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="freeLeft">
                            <h4>I Am Available For Freelancer.</h4>
                            <p style={{ color: "#6f809b" }}>Open to freelance opportunities. Let's collaborate on your next project.</p>
                        </motion.div>
                        <motion.div
                            variants={fadeIn("left", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="freeRight">
                            <form className="d-flex align-items-center" action="">
                                <input type="email" placeholder="Email address" required />
                                <button style={{ backgroundColor: "#172d51", color: "white", width: "100%" }} type="submit" class="btn ">Submit</button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Freelance;