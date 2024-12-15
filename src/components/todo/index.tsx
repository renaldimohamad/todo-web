import {Navigate} from "react-router-dom"
import useStore from "../../stores/hook"
import {PostTodo} from "../../pages/posts/post-todo"

export const Index = () => {
   const {isLogin, } = useStore()
 
   if (!isLogin) {
      return <Navigate to={"/"} />
   }

   return (
      <div className="mt-4">
         <PostTodo />
      </div>
   )
}
