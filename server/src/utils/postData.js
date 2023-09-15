 const {Country}=require('../db')
 const dataCountries =require ('./dataCountries')
 //Funcion para obtener datos de la API y almacenarlos en la BD
 const postData = async () => {
    try {
      // Obtener todos los registros de países desde la BD
      const data = await Country.findAll();
  
      // Si ya hay datos en la base de datos, simplemente los devuelve
      if (data.length) {
        return data;
      }
  
      // Si no hay datos en la base de datos, obtiene datos de la API utilizando 'dataCountries'
      const countries = await dataCountries();
  
      // Luego, inserta los datos obtenidos en la base de datos utilizando 'bulkCreate'
      const createCountries = await Country.bulkCreate(countries);
  
      // Devuelve los registros recién insertados en la base de datos
      return createCountries;
    } catch (error) {
      // En caso de error, registra un mensaje de error en la consola
      console.log(error.message);
    }
  };
module.exports=postData;