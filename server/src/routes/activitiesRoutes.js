const { Router } = require("express");
const activitiesRoutes = Router();
const {postActivityHandler,getActivityHandler,getActivityByIdHandler, deleteActivityHandler} =require('../handlers/activitiesHandlers');


activitiesRoutes.get('/',getActivityHandler);
activitiesRoutes.post('/',postActivityHandler);
activitiesRoutes.get('/:id',getActivityByIdHandler );
activitiesRoutes.delete('/:ActivityId',deleteActivityHandler);




module.exports = activitiesRoutes;
