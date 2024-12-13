import {useEffect} from "react"
import {LoginForm} from "../../pages/auth/login"

export const Login = ({setShowNavbar}: any) => {
   useEffect(() => {
      setShowNavbar(false)
      return () => {
         setShowNavbar(true)
      }
   }, [setShowNavbar])

   return (
      <>
         <LoginForm />
      </>
   )
}
