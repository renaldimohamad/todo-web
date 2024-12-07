import {Button, Col, Container, Image, Row} from "react-bootstrap"
import CustomInput from "../../common/custom-input"
import {Link} from "react-router-dom"
import todoimg from "../../assets/images/todo-photo.png"

export const RegisterForm = () => {
   return (
      <div>
         <Container
            fluid
            className="vh-100 d-flex align-items-center justify-content-center"
         >
            <Row className="vw-100 h-100 shadow-lg">
               <Col
                  md={7}
                  className="h-100 d-flex align-items-center justify-content-center"
               >
                  <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                     <div className="mb-3">
                        <h5 className="text-center fw-bold ">
                           Welcome to Your Productivity Hub !
                        </h5>
                        <p className="text-center">
                           Get started - it's free. No credit card needed.
                        </p>
                     </div>
                     <Col md={5} className="d-flex flex-column gap-3">
                        <CustomInput placeholder="User Name" />
                        <CustomInput placeholder="Email" />
                        <CustomInput placeholder="Password" type="password" />
                        <Button className="button-register">Register</Button>

                        <p>
                           Already have an account?{" "}
                           <Link
                              to="/auth/login"
                              className="text-decoration-none cursor-pointer"
                              style={{
                                 color: "rgb(106, 151, 151)",
                              }}
                           >
                              Login
                           </Link>
                        </p>
                     </Col>
                  </div>
               </Col>

               {/* SESION 2 */}
               <Col
                  md={5}
                  className="container-auth p-5 h-100 d-flex align-items-center"
               >
                  <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                     <Col md={10} className="text-center ">
                        <p className="footer">Achieve Productivity!</p>
                        <Image
                           src={todoimg}
                           alt="todo-img"
                           style={{
                              width: "50%",
                           }}
                           className="img-fluid "
                        />
                        <div className="mt-2 w-100">
                           <p className="footer">
                              Embark on your productive journey. Add tasks and
                              achieve your goals!
                           </p>
                        </div>
                     </Col>
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   )
}
