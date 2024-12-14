import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import {CustomButton} from "../custom-button/button"
import todoLogo from "/src/assets/images/todo-photo.png"
import "./navigation.css"
import {NavbarBrand} from "react-bootstrap"
import useStore from "../../stores/hook"

const Navigation = () => {
   const {isLogin, clearUser} = useStore()

   return (
      <div>
         <Navbar expand="lg" className="bg-body-tertiary">
            <Container className="d-flex justify-content-between align-items-center">
               {/* Kiri: Logo dan Nama Aplikasi */}
               <div className="d-flex align-items-center">
                  <img src={todoLogo} alt="todo-logo" className="todo-logo" />

                  <NavbarBrand>
                     <span className="nav-todo-wrapper ms-2 me-1">
                        <span className="nav-todo">todolist</span>
                     </span>
                     <span className="header-text">.</span>
                     <span className="header-text">com</span>
                  </NavbarBrand>
               </div>

               {/* Kanan: Tombol */}
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse className="justify-content-end ">
                  {isLogin ? (
                     <>
                        {/* <Button onClick={() => clearUser()}>log out</Button> */}
                        <CustomButton
                           customtext={"Log Out"}
                           className="custom-button-login me-3 rounded-5"
                           onClick={() => clearUser()}
                        />
                     </>
                  ) : (
                     <>
                        <CustomButton
                           customtext={"Login"}
                           className="custom-button-login me-3 rounded-5"
                           path="/auth/login"
                        />
                        <CustomButton
                           customtext={"Get Started"}
                           className="custom-button px-4 py-2 rounded-5"
                           path="/auth/register"
                        />
                     </>
                  )}
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   )
}

export default Navigation
