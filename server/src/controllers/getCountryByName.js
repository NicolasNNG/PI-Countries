//Obtener  nombre de países de la BD
const { Op } = require('sequelize');
const  {Country}=require('../db');

const getCountryByName =async(name)=>{
    if(!name )throw Error('Por favor, introduzca el parámetro "nombre" en su consulta.')// Valida si 'name' no está definido y lanza un error si es así.
    const countryFilter=await Country.findAll({
        where:{
            name:{
                [Op.iLike]: `%${name}%`  //, sin importar mayúsculas o minúsculas.alt+96`
            },
           
        },

    })
    
    // Comprueba si se encontraron países en la consulta
    
    if (!countryFilter.length) throw Error("No se han encontrado países con el nombre especificado."); // Valida si no se encontraron países y lanza un error si es así.
    return countryFilter; // Devuelve la lista de países encontrados en la base de datos.
   
}


module.exports = getCountryByName;