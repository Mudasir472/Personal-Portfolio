import ActualProjects from "./ActualProjects";
import js from "../Images/JS.svg"
import html from "../Images/html.svg"

const JS = () => {
    return (
        <>
            <div className="allProjects d-flex align-items-center justify-content-evenly flex-wrap mb-4 mt-4 mt-5">
            <ActualProjects img = {js} project="Kashmiri Market" desc="Grocery Store" link="https://mudasir472.github.io/Kashmiri-Market/" use={["Javascript","HTML","BOOTSTRAP"]}/>
                <ActualProjects img = {js} project="Kash-Restaurant" desc="delicious" link="https://mudasir472.github.io/Kashmiri-Restaurant/" use={["JAVASCRIPT","HTML","CSS"]}/>
                <ActualProjects img = {html} project="Tic-Tac-Toe" desc="Play It" link="https://mudasir472.github.io/Tic-Tac-Toe/" use={["HTML","CSS","JAVASCRIPT"]}/>
            </div>
        </>
    )
}

export default JS;