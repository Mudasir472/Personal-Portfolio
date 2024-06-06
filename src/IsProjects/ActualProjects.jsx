import "./Projectss.css"

const ActualProjects = ({ img, project, desc, link, use }) => {
    return (
        <>
            <div className="actualProject shadow d-flex flex-column align-items-center justify-content-evenly mb-5">
                <div style={{ width: "87%" }} className="divUp d-flex align-items-center justify-content-evenly">
                    <div className="img">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="desc">
                        <h4>{project}</h4>
                        <p>{desc} <a target="_blank" href={link}><i style={{ cursor: "pointer" }} class="bi text-primary bi-box-arrow-up-right"></i></a></p>
                    </div>
                </div>
                <div className="divLow d-flex align-items-center justify-content-between">
                    <span class="SBadge d-flex flex-column align-items-center justify-content-cente">{use[0]}</span>
                    <span class="SBadge d-flex flex-column align-items-center justify-content-cente">{use[1]}</span>
                    <span class="SBadge d-flex flex-column align-items-center justify-content-cente">{use[2]}</span>
                </div>
            </div>
        </>
    )
}

export default ActualProjects;