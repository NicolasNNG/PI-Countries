import { NavLink } from "react-router-dom";
import style from './Card.module.css';
import PropTypes from 'prop-types';


const Card=({flag,name,continents,id,})=>{
    return (
        <div className={style.card}>
            <NavLink className={style.container}to={`/country/${id}`}>
                 <img className={style.image} src={flag} alt="Imagen no disponible" />
                <h2 className={style.titulo}>{name}</h2>
                <h2 className={style.continents}>{continents}</h2>
               
            </NavLink>
                        
        </div>
    );
}
Card.propTypes = {
    flag: PropTypes.string.isRequired, // Esto asume que flag es una cadena (string) requerida
    name: PropTypes.string.isRequired,
    continents: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired, // Cambia el tipo según corresponda
  };
export default Card;