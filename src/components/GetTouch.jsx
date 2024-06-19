import "./GetTouch.css"
import contact from "../Images/contact.svg"
const GetTouch = () => {
  return (
    <>
      <div className="getTouch p-5 pt-5 bg-light">
        <div className="TouchMain container d-flex">
          <div className="touchLeft">
            <h3>Get in Touch !</h3>
            <p>Always available for freelancing if the right project
              comes along, Feel free to contact me.</p>
            <form>

              <div className="details d-flex  justify-content-between">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" placeholder="your name" class="wdth-60 form-control" id="examplename" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="wdth-60 form-control" placeholder="example@gmail.com" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
              <div className="details  d-flex  justify-content-between">
                <div class="mb-3">
                  <label for="subject" class="form-label">Subject</label>
                  <input type="text" placeholder="your Subject" class="wdth-60 form-control" id="exampleSubject" />
                </div>
                <div class="mb-3">
                  <label for="Contact" class="form-label">Contact</label>
                  <input type="text" placeholder="contact" class="wdth-60 form-control" id="exampleContact" />
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea placeholder="Enter your message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="touchRight d-flex align-items-center justify-content-center">
            <div className="rightMain">
              <img className="img-fluid" src={contact} alt="" />
              <div className="phone d-flex align-items-center justify-content-between">
                <i class="bi bi-telephone"></i>
                <h3>+91 6006189840</h3>
              </div>
              <div className="phone d-flex align-items-center justify-content-between">
                <i class="bi bi-envelope"></i>
                bhatmuddu472@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetTouch;