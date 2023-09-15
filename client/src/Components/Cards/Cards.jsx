import Card from '../Card/Card'
import style from './Cards.module.css'
import PropTypes from 'prop-types';


const Cards = ({countries}) => {
    return (
      <div className={style.cardsContainer}>
        {countries.map((country) => (
          <Card
          key={country.id}
          name={country.name}
          flag={country.flag}
          continents={country.continents}
          capital={country.capital}
          subregion={country.subregion}
          area={country.area}
          population={country.population}
          />
        ))}
      </div>
    )
  }
  Cards.propTypes = {
    countries: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        flag: PropTypes.string.isRequired,
        continents: PropTypes.arrayOf(PropTypes.string).isRequired,
        capital: PropTypes.string.isRequired,
        subregion: PropTypes.string.isRequired,
        area: PropTypes.number.isRequired,
        population: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
  
export default Cards;  