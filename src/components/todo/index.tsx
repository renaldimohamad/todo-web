import {useEffect, useState} from "react"
import {Navigate} from "react-router-dom"
import useStore from "../../stores/hook"
import {PostTodo} from "../../pages/posts/post-todo"
import {Card, Col} from "react-bootstrap"
import "./todo.css"

export const Index = () => {
   const {isLogin, user} = useStore()
   const [showUserName, setShowUserName] = useState(true)

   useEffect(() => {
      const timer = setTimeout(() => {
         setShowUserName(false)
      }, 3000)

      return () => clearTimeout(timer)
   }, [])

   if (!isLogin) {
      return <Navigate to={"/"} />
   }

   return (
      <div className="mt-5">
         <div className="d-flex flex-column justify-content-center align-items-center gap-3">
            <div className="d-flex gap-2 align-items-center ">
               {showUserName && (
                  <span className="font-weight-bold fs-4">
                     {" "}
                     Welcome {""}
                     {user.userName}
                  </span>
               )}{" "}
            </div>
            <h6>Simplified Organization, Outstanding Results.</h6>
            <h5>Plan Your Day, One Task at a Time</h5>
            <Col md={12} className="d-flex justify-content-center mt-3">
               <Card className="todo-card shadow-lg px-3">
                  <Card.Header className="bg-white">
                     <div className="d-flex justify-content-center mt-2 mb-2">
                        <h5 className="font-weight-bold">Get Things Done!</h5>
                     </div>
                     <PostTodo />
                  </Card.Header>
               </Card>
            </Col>
         </div>
      </div>
   )
}
