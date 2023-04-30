import { useState } from "react"

export const withFormValidation = (WrappedComponent) =>{ // withFormValidation(Form)
    
    // componente transformado
    const WithFormValidation = (props) => {
        const [errors, setError] = useState({})

        const validateForm = () => {
            let newErrors = {}         
            let isValid = true
       
            if (!props.formData.nombre) {
                newErrors.nombre = 'debe ingresar nombre'  
                isValid = false              
            }
            if (!props.formData.email) {
                newErrors.email = 'debe ingresar mail'                
                isValid = false
            }
            setError(newErrors)     
            return isValid       
        }

        return (
            <WrappedComponent // From
                {...props}
                errors={errors} 
                validateForm={validateForm} 
            /> // <Form validateForm error {...props}  />
       )

    }

    return WithFormValidation
}
