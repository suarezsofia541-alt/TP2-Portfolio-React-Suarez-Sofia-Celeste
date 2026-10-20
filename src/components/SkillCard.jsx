const SkillCard = ({nombre, img}) => {

    return(
        <div>
            <div>
                <h4>{nombre}</h4>
                <img src={img} alt={nombre}/>
            </div>
        </div>
    )
}

export default SkillCard