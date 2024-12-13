import {IRegisterForm} from "../../types/register"
import * as authAsync from "../../../lib/call/auth"

export const useRegisterFunction = () => {
   const register = async (body: IRegisterForm) => {
      try {
         const res = await authAsync.register(body)
         console.log(res)
      } catch (error: any) {
         console.log("🚀 Register Error", error)
         throw new Error(error.response?.data?.message)
      }
   }

   return {register}
}
