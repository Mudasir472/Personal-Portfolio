import "./Education.css"

const EduExperience = ({ img, e1, e2, e3, y1, y2, y3 }) => {
    return (
        <>
            <div className="eduExp d-flex align-items-center justify-content-between mb-5">
                <div className="left shadow-sm bg-body-tertiary d-flex align-items-center justify-content-center">
                    <img src={img} alt="" />
                </div>
                <div className="right">
                    <div className="shadow-sm bg-body-tertiary rounded">
                        <h6 className="edu1 d-flex justify-content-between align-items-center"><span>{e1}</span> <span className="mg">{y1}</span></h6>
                    </div>
                    <div className="shadow-sm bg-body-tertiary rounded">
                        <h6 className="edu1 d-flex justify-content-between align-items-center"><span>{e2}</span> <span className="mg">{y2}</span></h6>
                    </div>
                    <div className="shadow-sm bg-body-tertiary rounded">
                        <h6 className="edu1 d-flex justify-content-between align-items-center"><span>{e3}</span> <span className="mg">{y3}</span></h6>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EduExperience;