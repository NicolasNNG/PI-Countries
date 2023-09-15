// Función para manejar errores
const getAllCountries=require('../controllers/getAllCountries')
const getCountryById =require('../controllers/getCountryById')
const getCountryByName =require('../controllers/getCountryByName')

const getAllCountriesHandler =async (req,res)=>{
  try{
    const allCountries=await getAllCountries()
    res.status(200).json(allCountries)// solicitud ha tenido éxito
  }catch(error){
    res.status(500).json({message:error.message})// El servidor ha encontrado una situación que no sabe cómo manejarla.
  }
}


const getCountryByIdHandler = async(req,res)=>{
  try{
    const {id}=req.params;// Extraer el parámetro "id" de la consulta en la URL
    const countryFound=await getCountryById(id)// Llamar a la función asincrónica getCountryById para buscar países por el id proporcionado
    res.status(200).json(countryFound);

  }catch(error){
    res.status(404).json({error:error.message})

  }
}
const getCountryByNameHandler = async (req, res) => {
  try {
    const { name } = req.query; 
    const countriesFound = await getCountryByName(name); 
    res.status(200).json(countriesFound);
  } catch (error) {
    res.status(404).json({ error: error.message }); // 404 El servidor no pudo encontrar el contenido solicitado.
  }
};
module.exports={
  getAllCountriesHandler,
  getCountryByNameHandler,
  getCountryByIdHandler,
}