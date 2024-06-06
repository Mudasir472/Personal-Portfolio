import "./OurServices.css"

const ServiceTopicsInside = ({img,head,desc,color,bg}) =>{
    return (
        <>
            <div className="ServiceTopicsInside  rounded d-flex flex-column align-items-start justify-content-evenly p-4">
                <div style={{color : color,backgroundColor:bg}} className="image d-flex align-items-center justify-content-center">
                <img style={{color: color}} src={img} alt="" />
                </div>
                <h5>{head}</h5>
                <p style={{color : "#6f809b"}}>{desc}</p>

            </div>
            
        </>
    )
}

export default ServiceTopicsInside;