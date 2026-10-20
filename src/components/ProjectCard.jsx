import { useState } from 'react'

const ProjectCard = ({nombre,descripcion,tecnologias,img}) => {
    const [VerMas,setVerMas]=useState(false) 

    return(
        <div>
            <div>
            {VerMas ? (
                <div>
                    <h4>{nombre}</h4>
                    <p>Descripcion: {descripcion}</p>
                    <p>Tecnologias: {tecnologias}</p>
                    <button className="btnVerMas" onClick={() => setVerMas(false)}>ver menos</button>
                </div>
                ) : (
                <div>
                    <img src={img} alt={nombre}/>
                    <h4>{nombre}</h4>
                    <button className="btnVerMas" onClick={() => setVerMas(true)}>ver mas</button>
                </div>
            )}
        </div>
        </div>
    )
}

export default ProjectCard