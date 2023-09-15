//Controllers manejar toda la logica
const {Activity,Country}=require('../db');
const getCountryById = require('../controllers/getCountryById')

//Crear Nueva Actividad
const postActivity =async(CountriesId, name,difficulty,duration,season)=>{
    if(!CountriesId || !name || !difficulty || !duration || !season){
        throw new Error("Faltan parametros");
    }
    let Count=0; 
    //Interamos a traves de los id de los países proporcionados
    for(const countryId of CountriesId){
        const findCountry=await getCountryById(countryId);
        if(!findCountry){
            throw new Error("El país no existe");
        }
        Count++;
    }

    if(Count===CountriesId.length){//Si se encontraron todos los países proporcionados
        const newActivity=await Activity.create({// Crea una nueva actividad en la base de datos.
            name,
            difficulty,
            duration,
            season,
            
        });
        // if(!newActivity){
        //     throw new Error("No se pudo crear la actividad");
        // }
        // return newActivity;
        for (const countryId of CountriesId) {
            const findCountry = await getCountryById(countryId)
            await findCountry.addActivity(newActivity)
          }
      
          return newActivity;
        } else {
          throw new Error('Países no vinculador con la actividad')
        }

};
//Traer actividad 
const  getActivityDb =async ()=>{
    const ActivityDb =await Activity.findAll({
        include:Country
    });
    if(!ActivityDb.length )throw new Error("No se Encontraron Actividades en la Base de Datos")
    return ActivityDb;
};

//Actividades por ID
const getActivityById =async (id)=>{
    if(!id)throw  Error('No se recibio ID ')
    const foundActivity=await Activity.findOne({// Realiza una consulta a la base de datos para encontrar una actividad con el ID proporcionado
    where:{
        id:id
        },
        include:Country
    });
    return foundActivity
}

//Borrar actividad
const deleteActivity = async (ActivityId) => {// Definición de una función asincrónica llamada deleteActivity que toma un parámetro ActivityId
    
    if (!ActivityId) {
        throw Error('No se proporciona un ID');// Lanza un error con un mensaje específico si no se proporciona un ID
    }

    // Busca la actividad en la base de datos por su ID
    const foundActivity = await Activity.findByPk(ActivityId);//findByPk  buscar y recuperar un registro.

    // Verifica si no se encontró ninguna actividad con ese ID
    if (!foundActivity) {
        // Lanza un error con un mensaje específico si no se encuentra la actividad
        throw Error('No existe ninguna actividad con ese ID');
    }

    // Elimina la actividad de la base de datos utilizando su ID
    const destroyActivity =await Activity.destroy({
         where: {
             id: ActivityId 
            } 
        });

    // Devuelve un mensaje de éxito si la actividad se elimina correctamente
    return 'Actividad eliminada exitosamente.';
}


module.exports ={
    postActivity,
    getActivityDb,
    getActivityById,
    deleteActivity 
};

