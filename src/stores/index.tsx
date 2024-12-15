import {createContext, useState} from "react"
import {IUser, TStore} from "../services/types/store"
import {api} from "../lib"

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
   const [posts, setPosts] = useState([])

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

   const getPosts = async () => {
      try {
         const res = await api.get("/posts")

         console.log(res.data)

         setPosts(res.data)
      } catch (error) {
         console.log(error)
      }
   }

 
   return (
      <>
         <Store.Provider
            value={{
               user,
               isLogin,
               setUser,
               clearUser,
               isDarkMode,
               toggleTheme,
               posts,
               getPosts,
            }}
         >
            {children}
         </Store.Provider>
      </>
   )
}
