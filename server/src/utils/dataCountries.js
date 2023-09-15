//cargar datos de la API a una BD
const{Country}=require('../db');
const axios = require("axios");
const URL='http://localhost:5000/countries/'//definir constante con la URL de la API

//Funcion para cargar datos desde la API a la base de datos
const dataCountries = async()=>{
    try{
        const { data } = await axios(URL);
        const countries =await data.map(country =>{
          return{
            id: country.cca3,
            name: country.name.common,
            flag: country.flags.png,
            continents: country.continents,
            capital: country.capital ? country.capital : ['undefined'],
            subregion: country.subregion ? country.subregion : 'undefined',
            area: country.area,
            population: country.population  
        }
      })
      return countries
    
    } catch (error) {
        console.log(error.message);
      
    }
  };
 module.exports =dataCountries
    
  
