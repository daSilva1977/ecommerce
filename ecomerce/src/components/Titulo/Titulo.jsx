// const Titulo = (props) =>{
    const Titulo = ( {children, titulo='Titulo Default', subtitulo='Sub Default'} ) =>{
        console.log(children)
        return (
            <>
                {children}
                {/* { formulario({nombre:'Este'}) } */}
                <h1>Titulo de {titulo}</h1>
                <h2>{subtitulo}</h2>
            </>
        )
    }
    
    export default Titulo
    