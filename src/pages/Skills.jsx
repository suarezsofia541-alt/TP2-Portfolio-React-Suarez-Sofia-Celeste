import csharp from '../assets/icons/csharp.svg'
import javascrip from '../assets/icons/javascript.png'
import mysql from '../assets/icons/mysql.svg'
import react from '../assets/icons/react.svg'
import html from '../assets/icons/html.svg'
import css from '../assets/icons/css.svg'
import SkillCard from '../components/SkillCard'
import '../css/skills.css'

const Skills = () => {
    const habilidades = [
        { id: 1, nombre: "C#", img:csharp},
        { id: 2, nombre: "JavaScript", img:javascrip},
        { id: 3, nombre: "MySQL", img:mysql },
        { id: 4, nombre: "React", img:react },
        { id: 5, nombre: "HTML", img:html },
        { id: 6, nombre: "CSS", img:css }
    ];
    return(
        <div className="containerSkills">
            <h2>Habilidades</h2>
            <div className="skillsList">
                {habilidades.map((habilidad) => (
                    <div key={habilidad.id} className="skillsSpace">
                        <SkillCard nombre={habilidad.nombre} img={habilidad.img}/>
                    </div>
                ))}  
            </div>
            
        </div>
    )
}

export default Skills