
 const {Country,Activity}=require('../db');

const getCountryById =async(idcountry)=>{//Obtener país por ID
    if(!idcountry)throw Error('ID de país no proporcionado en la solicitud.')
    // El método `findAll()` obtiene todos los países donde la propiedad `id` coincide con el ID proporcionado.
    const countryFilter= await Country. findOne({
        where:{
            id:idcountry,
        },
        include:{
            model:Activity,
            attributes:['name','difficulty','duration','season'],
        }
       
    });
    if(!countryFilter)throw Error('No se encontró el país')
 return countryFilter
}
  
module.exports = getCountryById;