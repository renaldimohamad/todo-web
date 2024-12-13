import {createContext, useState} from "react"
import {IUser, TStore} from "../services/types/store"

interface StoreProps {
   children: React.ReactNode
}

export const Store = createContext<TStore | null>(null)

export const StoreProvider: React.FC<StoreProps> = ({children}) => {
   const [user, setUserState] = useState<IUser>({
      id: "",
      email: "",
      userName: "",
   })

   const [isLogin, setisLogin] = useState(false)
   const [isDarkMode, setIsDarkMode] = useState(false)

   const setUser = (user: IUser) => {
      setUserState(user)
      setisLogin(true)
   }

   const clearUser = () => {
      setUserState({
         id: "",
         userName: "",
         email: "",
      })
      localStorage.removeItem("token")
      localStorage.clear()
      setisLogin(false)
   }

   const toggleTheme = () => {
      setIsDarkMode((Prev) => !Prev)
   }

   return (
      <>
         <Store.Provider
            value={{user, isLogin, setUser, clearUser, isDarkMode, toggleTheme}}
         >
            {children}
         </Store.Provider>
      </>
   )
}
