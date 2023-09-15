// Importación de módulos y estilos
import style from "./Home.module.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCountries,
  getAllActivities,
  getAllCountries,
  orderCountries,
  filterActivity,
} from "../Redux/actions";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Obtiene una referencia al dispatcher de Redux
  const dispatch = useDispatch();

  // Obtiene los datos de 'allCountries' y 'activities' desde el store de Redux utilizando 'useSelector'
  const allCountries = useSelector((state) => state.allCountries);
  const activities = useSelector((state) => state.activities);

  // Calcula la cantidad de elementos a mostrar por página
  const itemsPerPage = 10;

  // Calcula el número total de páginas basado en la longitud de la lista de países
  const finalPage = Math.ceil(allCountries.length / itemsPerPage);

  // Calcula el índice inicial de los elementos a mostrar en la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;

  // Obtiene los países que serán visibles en la página actual
  const visibleCountries = allCountries.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Efecto secundario para obtener todos los países si no están disponibles en el store
  useEffect(() => {
    if (!allCountries) {
      dispatch(getAllCountries());
    }
    // Hace scroll hacia arriba cuando se monta el componente
    window.scrollTo(0, 0);
  }, []);

  // Efecto secundario para obtener todas las actividades cuando se monta el componente
  useEffect(() => {
    dispatch(getAllActivities());
  }, []);

  // Efecto secundario para reiniciar la página actual y hacer scroll arriba cuando cambian los países disponibles
  useEffect(() => {
    setCurrentPage(1);
    window.scrollTo(0, 0);
  }, [allCountries]);

  // Manejador de eventos para el ordenamiento de países
  const handleOrder = (event) => {
    dispatch(orderCountries(event.target.value));
  };

  // Manejador de eventos para el filtrado por continente
  const handleFilter = (event) => {
    dispatch(filterCountries(event.target.value));
  };

  // Manejador de eventos para el filtrado por actividad
  const handleActivity = (event) => {
    dispatch(filterActivity(event.target.value));
  };

  // Renderizado del componente
  return (
    <div className={style.background}>
      <div className={style.home}>
        <div className={style.container}>
          {/* Elemento 'select' para el ordenamiento de países */}
          <select className={style.buttonOrder} onChange={handleOrder}>
            <option value="A">Ascending</option>
            <option value="D">Descending</option>
            <option value="AP">Ascending Population</option>
            <option value="DP">Descending Population</option>
          </select>

          {/* Elemento 'select' para el filtrado por continente */}
          <select className={style.buttonFilter} onChange={handleFilter}>
            <option value="All Countries">All Countries</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Africa">Africa</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>

          {/* Mapea y renderiza la lista de países visibles */}
          {visibleCountries.map(
            ({
              id,
              name,
              flag,
              continents,
              capital,
              subregion,
              area,
              population,
            }) => {
              return (
                <div className={style.card} key={id}>
                  {/* Renderiza el componente 'Card' para cada país */}
                  <Card
                    key={id}
                    name={name}
                    id={id}
                    flag={flag}
                    continents={continents}
                    capital={capital}
                    subregion={subregion}
                    area={area}
                    population={population}
                  />
                </div>
              );
            }
          )}

          {/* Elementos para la paginación */}
          <div className={style.pagination}>
            {/* Botón para ir a la primera página */}
            <button
              className={style.button}
              disabled={currentPage === 1}
              onClick={() => {
                window.scrollTo(0, 0);
                setCurrentPage(1);
              }}
            >
              Start
            </button>

            {/* Botón para ir a la página anterior */}
            <button
              className={style.button}
              onClick={() => {
                window.scrollTo(0, 0);
                setCurrentPage(currentPage - 1);
              }}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {/* Elemento select para seleccionar la página */}
            <select
              value={currentPage}
              onChange={(e) => {
                window.scrollTo(0, 0);
                setCurrentPage(Number(e.target.value)); // Convierte el valor del select a número
              }}
              className={style.pageSelect}
            >
              {/* Genera opciones para todas las páginas disponibles */}
              {Array.from({ length: finalPage }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  Página {index + 1}
                </option>
              ))}
            </select>


            {/* Botón para ir a la página siguiente */}
            <button
              className={style.button}
              onClick={() => {
                window.scrollTo(0, 0);
                setCurrentPage(currentPage + 1);
              }}
              disabled={currentPage === finalPage}>
              Next
            </button>

            {/* Botón para ir a la última página */}
            <button
              className={style.button}
              onClick={() => {
                window.scrollTo(0, 0);
                setCurrentPage(finalPage);
              }}
              disabled={currentPage === finalPage}
            >
              End
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporta el componente 'Home' como el componente predeterminado
export default Home;
