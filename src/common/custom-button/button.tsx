import {Button} from "react-bootstrap"
import "./button.css"
import {useNavigate} from "react-router-dom"

export const CustomButton = ({customtext}: any) => {
   const navigate = useNavigate()

   return (
      <>
         <Button
            className="custom-button px-4 py-2 rounded-5"
            onClick={() => navigate("/auth/login")}
         >
            <p className="m-0">{customtext}</p>
         </Button>
      </>
   )
}
