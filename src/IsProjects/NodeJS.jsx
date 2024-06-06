import ActualProjects from "./ActualProjects";

import bootstrap from '../Images/bootstrap.svg'
import vue from '../Images/vue.svg';
import Angular from '../Images/Angular.svg';
import android from '../Images/android.svg';
import mongodb from '../Images/mongodb.svg';

const NodeJS = () =>{
    return (
        <>
            <div className="allProjects d-flex align-items-center justify-content-evenly flex-wrap mb-4 mt-4 mt-5">
                <ActualProjects img = {bootstrap} project="Shop OP" link="Trendy Shop OP" use={["REACTJS","NODEJS","BOOTSTRAP"]}/>
                <ActualProjects img = {android} project="projectName" link="link" use={["MONGO","NODEJS","BOOTSTRAP"]}/>
                <ActualProjects img = {mongodb} project="projectName" link="link" use={["MONGO","NODEJS","BOOTSTRAP"]}/>
                <ActualProjects img = {vue} project="projectName" link="link" use={["MONGO","NODEJS","BOOTSTRAP"]}/>
                {/* <ActualProjects img = {Angular} project="projectName" link="link" use={["MONGO","NODEJS","BOOTSTRAP"]}/>
                <ActualProjects img = {Angular} project="projectName" link="link" use={["MONGO","NODEJS","BOOTSTRAP"]}/> */}
            </div>
        </>
    )
}

export default NodeJS;