const {postActivity,getActivityDb,getActivityById,deleteActivity}=require ('../controllers/Activities')


//Nueva Actividad
const postActivityHandler=async(req,res)=>{
    try{
        const{ 
            CountriesId,
            name,
            difficulty,
            duration,
            season
        }=req.body;
        const response =await postActivity(CountriesId,name,difficulty,duration,season);
        res.status(201).json("Actividad creada correctamente",response);

    }catch(error){
        res.status(404).json({error:error.message})
    }

};
//Traer 
const getActivityHandler=async(req, res)=>{
    try{
        const response=await getActivityDb()
        res.status(200).json(response);

    }catch(error){
        res.status(404).json({error:error.message})
    }
}

//Actividad por ID
const getActivityByIdHandler =async(req, res)=>{
    try{
        const {id}=req.params
        const response=await getActivityById(id)
        res.status(200).json(response);

    }catch(error){
        res.status(404).json({error:error.message})
    }
}

//Borrar Actividad 

const deleteActivityHandler =async(req, res)=>{
    try{
        const {ActivityId}=req.params
        await deleteActivity(ActivityId)
        res.status(200).json("Se Elimino la Actividad");

    }catch(error){
        res.status(404).json({ error: error.message})
    }
}

module.exports={
    postActivityHandler,
    getActivityHandler,
    getActivityByIdHandler,
    deleteActivityHandler,
};