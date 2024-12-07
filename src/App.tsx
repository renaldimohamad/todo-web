import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Login} from "./components/login"
import {Register} from "./components/register"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from "./common/custom-navigation/navigation"
import {useState} from "react"
import "./App.css"
import {Home} from "./components/home"

function App() {
   const [showNavbar, setShowNavbar] = useState(true)

   return (
      <Router>
         {showNavbar && <Navigation />}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route
               path="/auth/login"
               element={<Login setShowNavbar={setShowNavbar} />}
            />
            <Route
               path="/auth/register"
               element={<Register setShowNavbar={setShowNavbar} />}
            />
         </Routes>
      </Router>
   )
}

export default App
