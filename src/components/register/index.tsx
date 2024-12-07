import {useEffect} from "react"
import {RegisterForm} from "../../pages/auth/register"

export const Register = ({setShowNavbar}: any) => {
   useEffect(() => {
      setShowNavbar(false) // Menyembunyikan navbar saat login
      return () => {
         setShowNavbar(true) // Mengembalikan navbar saat keluar dari login
      }
   }, [setShowNavbar])

   return (
      <>
         <RegisterForm />
      </>
   )
}
