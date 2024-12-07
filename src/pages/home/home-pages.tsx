import {Container} from "react-bootstrap"
import "./home-pages.css"

export const HomePages = () => {
   return (
      <>
         <div className="text-center">
            <Container fluid className="mt-5 d-flex flex-column gap-3">
               <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
                  <h2 className="fw-bold ">Enhance your productivity.</h2>
                  <span className="mb-0 fs-6 text-muted text-center">
                     Start for free now!
                  </span>
               </div>
               <div>
                  <p className="text-muted">
                     Unlimited boards and workflows. No credit card needed.
                  </p>
                  <div>
                     <p className="fw-bold text-muted fs-6">by</p>
                  </div>
               </div>
            </Container>
         </div>
      </>
   )
}
