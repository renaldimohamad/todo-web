import React from "react"
import {FormControl, FormControlProps} from "react-bootstrap"

interface InputProps extends FormControlProps {}

const CustomInput: React.FC<InputProps> = ({...reset}) => {
   return (
      <FormControl
         {...reset}
         style={{
            width: "100%",
         }}
      />
   )
}

export default CustomInput
