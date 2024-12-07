import {useEffect} from "react"
import {LoginForm} from "../../pages/auth/login"

export const Login = ({setShowNavbar}: any) => {
   useEffect(() => {
      setShowNavbar(false) // Menyembunyikan navbar saat login
      return () => {
         setShowNavbar(true) // Mengembalikan navbar saat keluar dari login
      }
   }, [setShowNavbar])

   return (
      <>
         <LoginForm />
      </>
   )
}
