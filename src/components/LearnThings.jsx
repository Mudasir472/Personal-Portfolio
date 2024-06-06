
//Motion 
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants'

import "./LearnThings.css"
import Android from "../Images/android.svg";
import Angular from "../Images/Angular.svg";
import Bootstrap from "../Images/bootstrap.svg";
import Vue from "../Images/vue.svg";
import React from "../Images/react.svg";
import Mongodb from "../Images/mongodb.svg";
import Laravel from "../Images/laravel.svg";
import Nodejs from "../Images/nodejs-icon.svg";
import LearnThingsPart from "./LearnThingPart";
const LearnThings = () => {
    return (
        <>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="container LT d-flex flex-wrap align-items-center justify-content-center">
                <LearnThingsPart img1={React} heading="React" desc="1 Year Experiance" />
                <LearnThingsPart img1={Nodejs} heading="Nodejs" desc="3 Months Experience" />
                <LearnThingsPart img1={Bootstrap} heading="Boorstrap" desc="1 Year Experiance" />
                <LearnThingsPart img1={Vue} heading="Vue" desc="1 Month Experience" />
                <LearnThingsPart img1={Angular} heading="Angular" desc="1 Year Experiance" />
                <LearnThingsPart img1={Android} heading="Android" desc="2 Months Experience" />
                <LearnThingsPart img1={Mongodb} heading="Mongodb" desc="1 Year Experiance" />
                <LearnThingsPart img1={Laravel} heading="Laravel" desc="1 Months Experience" />
            </motion.div>

        </>
    )
}
export default LearnThings;