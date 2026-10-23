const SkillCard = ({nombre, img}) => {

    return(
        <div className="skills">
            <div className="skillsinfo">
                <h4>{nombre}</h4>
            </div>
            <div className="skillsImgContainer">
               <img src={img} alt={nombre}/> 
            </div>
            
        </div>
    )
}

export default SkillCard