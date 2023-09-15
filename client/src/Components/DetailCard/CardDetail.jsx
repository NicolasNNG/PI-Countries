import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../Redux/actions";
import style from "./CardDetail.module.css/";
import { NavLink } from "react-router-dom";

const CardDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countryDetail);

  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [dispatch, id]);

  return (
    <div className={style.container}>
      <div className={style.detailes}>
        <img src={countryDetail.flag} className={style.flagContainer} alt="" />
        <h3>Name: {countryDetail.name}</h3>
        <h3>Continent: {countryDetail.continents}</h3>
        <h3>Capital: {countryDetail.capital}</h3>
        <h3>Subregion: {countryDetail.subregion}</h3>
        <h3>Area: {countryDetail.area}</h3>
        <h3>Population: {countryDetail.population}</h3>
        <NavLink to="/home">
        <button className={style.button}>Salir</button>
      </NavLink>
      </div>

      
    </div>
  );
};

export default CardDetail;
