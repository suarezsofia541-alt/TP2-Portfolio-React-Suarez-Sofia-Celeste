const EducationCard = ({id,nombre,nivel,estado,img}) => {
    return(
        <div>
            <h3>{nombre}</h3>
            <h5>Nivel: {nivel}</h5>
            <h5>Estado: {estado}</h5>
            <img src={img} alt={nombre}/>
        </div>
    )
}

export default EducationCard