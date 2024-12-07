import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import {CustomButton} from "../custom-button/button"
import todoLogo from "/src/assets/images/todo-photo.png"
import "./navigation.css"
import {NavbarBrand} from "react-bootstrap"

const Navigation = () => {
   return (
      <div>
         <Navbar expand="lg" className="bg-body-tertiary">
            <Container className="d-flex justify-content-between align-items-center">
               {/* Kiri: Logo dan Nama Aplikasi */}
               <div className="d-flex align-items-center">
                  <img src={todoLogo} alt="todo-logo" className="todo-logo" />
                  <NavbarBrand>
                     <span className="nav-todo-wrapper ms-2">
                        <span className="nav-todo">Todo</span>
                        <span className="nav">-</span>
                        <span className="nav-list">List</span>
                     </span>
                  </NavbarBrand>
               </div>

               {/* Kanan: Tombol */}
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse className="justify-content-end">
                  <CustomButton customtext={"Get Started"} />
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   )
}

export default Navigation
