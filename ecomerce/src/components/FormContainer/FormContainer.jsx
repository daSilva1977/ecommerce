import { useState } from "react"


const withFormValidation = (WrappedComponent) =>{ 
    const WithFormValidation = (props) => {
        const [errors, setError] = useState({})

        const validateForm = () => {
            
            let newErrors = {}         
            let isValid = true
       
            if (!props.formData.nombre) {
                newErrors.nombre = 'El nombre es obligatorio'  
                isValid = false              
            }
            if (!props.formData.email) {
                newErrors.email = 'El mail es obligatorio'                
                isValid = false
            }
            setError(newErrors)     
            return isValid       
        }

        return (
            <WrappedComponent 
                {...props}
                errors={errors} 
                validateForm={validateForm} 
            /> // <Form validateForm error {...props}  />
         )

    }

    return WithFormValidation
}

export const Form = ({formData, errors, validateForm, onChange}) => {

    const hanleSubmit = (event) => {
        event.preventDefault()
        
        if(validateForm()){
            console.log('enviar formulario')
        }
    }

    return (
        <center>
            <form onSubmit={hanleSubmit} > 
                <label>Nombre:</label><br></br>

                <input 
                    type='text' 
                    name='nombre' 
                    placeholder="ingrese el nombre" 
                    onChange={(e)=>onChange(e)}
                    value={formData.nombre}
                />                    
                <br/>
                {errors && errors.nombre && <span>{errors.nombre}</span>}
                <br/>
                <label>Email:</label><br></br>
                <input 
                    type='text' 
                    name='email' 
                    placeholder="ingrese el mail" 
                    onChange={(e)=>onChange(e)} 
                    value={formData.email}
                />
                <br />
                {errors && errors.email && <span>{errors.email}</span>}
                <br/>
                <button type="submit">Enviar</button>
            </form>
        </center>
    )
}

const FormWithValidation = withFormValidation(Form)

export const FormContainer = ()=> {
    const [ formData,setFormData ] = useState({
        nombre: '',
        email: ''
    })

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }   

    return (
        <div>
            <FormWithValidation formData={formData} onChange={onChange} />
        </div>
    )
}


