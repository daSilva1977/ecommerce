

export const Form = ({ formData, errors, validateForm, onChange }) => {

    /**
     * If the form is valid, then log 'enviar formulario' to the console.
     */
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
