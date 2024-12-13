import {Navigate} from "react-router-dom"
import useStore from "../../stores/hook"
import {Todo} from "../../pages/todo"

export const Index = () => {
   const {isLogin} = useStore()

   if (!isLogin) {
      return <Navigate to={"/"} />
   }

   return (
      <>
         <Todo />
      </>
   )
}
