import Education from "../components/Education";
import Freelance from "../components/Freelance";
import FrontSide from "../components/FrontSide";
import GetTouch from "../components/GetTouch";
import LearnThings from "../components/LearnThings";
import MyProjects from "../components/MyProjects";
import OurServices from "../components/OurServices";
import PersonalDetails from "../components/PersonalDetails";

const Home = () =>{
    return (
        <>
            <FrontSide />
            <PersonalDetails />
            <LearnThings />
            <OurServices />
            <Education />
            <Freelance />
            <MyProjects />
            <GetTouch />
            
        </>
    )
}

export default Home;