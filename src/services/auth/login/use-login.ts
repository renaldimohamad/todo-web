import {useForm} from "react-hook-form"
import * as yup from "yup"
import {ILoginForm} from "../../types/login"
import {yupResolver} from "@hookform/resolvers/yup"

export const useLogin = () => {
   const schema = yup.object().shape({
      email: yup
         .string()
         .required("Email is required")
         .email("Email is invalid"),
      password: yup
         .string()
         .required("Password is required")
         .max(6, "The password must be a maximum of 6 characters"),
   })

   const initialValues = {
      email: "",
      password: "",
   }

   return useForm<ILoginForm>({
      defaultValues: initialValues,
      resolver: yupResolver(schema),
      mode: "all",
   })
}
