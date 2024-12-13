import {setAuthToken} from "../../../lib"
import * as AuthAsync from "../../../lib/call/auth"
import useStore from "../../../stores/hook"

export const useloginFunction = () => {
   const {setUser} = useStore()

   const login = async (email: string, password: string) => {
      try {
         const resToken = await AuthAsync.login(email, password)

         const profile = await AuthAsync.checkAuth(resToken.token)

         setUser(profile)
         setAuthToken(resToken.token)
         localStorage.setItem("token", resToken.token)
         localStorage.setItem("token", resToken.token)
      } catch (error: any) {
         console.log("🚀 ~ login ~ error:", error)
         throw new Error(error.response?.data?.message)
      }
   }

   return {
      login,
   }
}
