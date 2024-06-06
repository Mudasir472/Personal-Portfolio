
import "./LearnThings.css"
const LearnThingsPart = ({img1,heading,desc}) =>{
    return (
        <>
            <div className="forOutLine mb-4 mt-3">
            <div className="learning d-flex align-items-center justify-content-evenly shadow-sm bg-body-tertiary rounded">
                <div className="image">
                    <img style={{height : "34px"}} src={img1} alt="" />
                </div>
                <div className="desc">
                    <h6>{heading}</h6>
                    <p>{desc}</p>
                </div>
            </div>
            </div>
            
        </>
    )
}

export default LearnThingsPart;