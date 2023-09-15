const {Country}=require('../db')

const getAllCountries=async()=>{
    const countries=await Country.findAll()
    if(!countries.length)throw Error ('No se encontraron Países en la Base de Datos.')
    return countries;
    
}
module.exports =getAllCountries;