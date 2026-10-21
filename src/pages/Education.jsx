import IPRimg from '../assets/imgeducation/IPRimg.jpg'
import aticanaimg from '../assets/imgeducation/aticanaimg.jpg'
import UTNimg from '../assets/imgeducation/UTNimg.png'
import EducationCard from "../components/EducationCard"

const Education = () => {
const Instituciones = [
        { id: 1, nombre: "Instituto Privado Rivadavia", nivel: "Secundario", estado: "completo", img:IPRimg},
        { id: 2, nombre: "Universidad Tecnologica Nacional - Facultad Regional Tucuman", nivel: "Terciario", estado: "En proceso", img:UTNimg},
        { id: 3, nombre: "Aticana - Instituto de Ingles", nivel: "B1", estado: "En Proceso", img:aticanaimg}
    ];

    return(
        <div>
            <h2>Educacion</h2>
            <div>
                {Instituciones.map((institucion) => (
                    <div key={institucion.id}>
                        <EducationCard nombre={institucion.nombre} nivel={institucion.nivel} estado={institucion.estado} img={institucion.img}/>
                    </div>
                ))}  
            </div>
        </div>
    )
}

export default Education