const EducationCard = ({nombre,nivel,estado,img}) => {
    return(
        <div className="education">
            <div className="institucioninfo">
                <h3>{nombre}</h3>
                <h5>Nivel: {nivel}</h5>
                <h5>Estado: {estado}</h5> 
            </div>
            <img src={img} alt={nombre}/>
        </div>
    )
}

export default EducationCard