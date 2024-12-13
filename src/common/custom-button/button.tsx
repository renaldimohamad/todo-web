import {Button} from "react-bootstrap"
import "./button.css"
import {useNavigate} from "react-router-dom"

interface CustomButtonProps {
   customtext: string
   path?: string
   className?: string
   onClick?: () => void
}

export const CustomButton = ({
   customtext,
   path,
   className,
   onClick,
}: CustomButtonProps) => {
   const navigate = useNavigate()

   const handleClick = () => {
      if (onClick) {
         onClick()
      }
      if (path) {
         navigate(path)
      }
   }

   return (
      <Button className={className} onClick={handleClick}>
         <p className="m-0">{customtext}</p>
      </Button>
   )
}
