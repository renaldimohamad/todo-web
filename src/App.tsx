import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Login} from "./components/login"
import {Register} from "./components/register"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from "./common/custom-navigation/navigation"
import {useEffect, useState} from "react"
import "./App.css"
import {Home} from "./components/home"
import {Index} from "./components/todo"
import {api, setAuthToken} from "./lib"
import useStore from "./stores/hook"

function App() {
   const [showNavbar, setShowNavbar] = useState(true)

   const {setUser} = useStore()

   async function checkAuth() {
      const token = localStorage.getItem("token")
      if (!token) {
         return
      }

      try {
         const res = await api.get("/auth/me", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         })

         setUser(res.data)
         setAuthToken(token)
      } catch (error) {
         throw error
      }
   }

   useEffect(() => {
      checkAuth()
   }, [])

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
            <Route path="/todo" element={<Index />} />
         </Routes>
      </Router>
   )
}

export default App
