import "./Header.css";
import { Link } from 'react-router-dom';
import React from 'react';
//Motion 
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants'
import sign from "../Images/Sign.png"
const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    class="container-fluid">
                    <a class="navbar-brand margin-left-14" href="#">
                        <img style={{ color: "black", height: "44px", width: "140%" }} src={sign} alt="Logo" class="d-inline-block align-text-top" />

                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div style={{ marginRight: "43px" }} class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-padding">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/About">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Services">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Projects">Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                        <a href="#"><button type="button" class="btn btn-info text-light">Hire Me</button></a>
                    </div>
                </motion.div>
            </nav>
        </>
    )
}
export default Header;