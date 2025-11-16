import { Link } from "react-router-dom";

export default function PageError(){
   return(
    <>
    <div className="d-grid justify-content-center">
    <h1 style={{fontSize:'37px',padding:'20px',marginTop:'100px'}}> Pagina No Encontrada. 😢</h1>
    <h4 className="text-secondary "> Puedes ver nuestros productos aqui.</h4>
    <Link className="btn btn-primary mt-2" to={'/'}> Inicio</Link>
    </div> </>
   )
}
