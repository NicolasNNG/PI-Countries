const { Router } = require("express");
const {getAllCountriesHandler,getCountryByNameHandler,getCountryByIdHandler}=require('../handlers/countriesHandlers')
const countriesRoutes = Router();


countriesRoutes.get("/name",getCountryByNameHandler);
countriesRoutes.get("/:id",getCountryByIdHandler); 
countriesRoutes.get("/",getAllCountriesHandler); 


 



module.exports = countriesRoutes;
