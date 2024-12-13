import {useEffect} from "react"
import {RegisterForm} from "../../pages/auth/register"

export const Register = ({setShowNavbar}: any) => {
   useEffect(() => {
      setShowNavbar(false)
      return () => {
         setShowNavbar(true)
      }
   }, [setShowNavbar])

   return (
      <>
         <RegisterForm />
      </>
   )
}
