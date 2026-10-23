import fotoperfil from '../assets/imgperfil/FotoPerfil.jpeg'
import '../css/home.css'

const Home = () => {

    return(
        <div className="containerHome">
             <div className="infoHome">
                <h6>Sofia Celeste Suarez</h6>
                <h6>Estudiante de Programación. </h6>
                <h6>Me interesa el desarrollo web y aprender nuevas tecnologías.</h6> 
            </div>
            
            <div>
                <img src={fotoperfil} alt='imagen de sofia celeste suarez' className='imgPerfil'/>
            </div>
        </div>
    )
}

export default Home