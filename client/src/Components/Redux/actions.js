import axios from 'axios'


//OBTENER TODOS LOS PAISES
export const  getAllCountries=()=>{
    return async (dispatch)=>{
        try{
            // Realiza una solicitud GET a la API para obtener todos los países.
            const {data}=await axios('http://localhost:3001/countries/')
            if(data.length){
                // Si hay datos en la respuesta, dispara una acción Redux para almacenar esos datos.
                // La acción tiene un tipo 'GET_ALL_COUNTRIES' y lleva los datos como carga útil (payload).
                return dispatch({
                    type:'GET_ALL_COUNTRIES',
                    payload:data});
            }
                        
        }catch(error){
            console.log('Error en el redux');
        }
    }
}

//PAISES POR ID 
export const getCountryDetail=(idcountry)=>{
    return async  (dispatch)=>{
        try{
            const {data}=await axios(`http://localhost:3001/countries/${idcountry}`)
            if(data.name){
                return dispatch({
                    type:'GET_COUNTRY_DETAIL',
                    payload:data});
            }
            
           
        }catch(error){
            console.log(error.message);
        }
    }
}

//PAISES POR NOMBRE
export const getCountryByName=(name)=>{
   return async (dispatch)=>{
    try{
        const {data}=await axios(`http://localhost:3001/countries/name?name=${name}`);
        return dispatch({
            type:'GET_COUNTRY_BY_NAME',
            payload:data
        })
    }catch(error){
        console.log(error.message);
    }
    

   }
}

export const getAllActivities=()=>{
    return async(dispatch)=>{
        try{
            const{data}=await axios('http://localhost:3001/activities/')
            if(data.length){
                return dispatch({
                    type:'GET_ALL_ACTIVITIES',
                    payload:data});
            }
        }catch(error){
            console.log(error.message);
        }
    }
}
export const postActivity=(form)=>{
    return async(dispatch)=>{
        try{
            const{data}=await axios.post('http://localhost:3001/activities/',form)
            if(data.name){
                return dispatch({
                    type:'POST_ACTIVITY',
                    payload:data
                })
            }
          
        }catch(error){
            console.log(error.message);
        }
    }
}

 
export const deleteActivity=(ActivityId)=>{
    return async(dispatch)=>{
        try{
            await axios.delete(`http://localhost:3001/activities/${ActivityId}`)
            return dispatch({
                type:'DELETE_ACTIVITY',
                payload:ActivityId
            })
          
        }catch(error){
            console.log(error.message);
        }
    }
} 
export const updateFormActivity = (updateForm) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`http://localhost:3003/activities/`, updateForm);
            return dispatch({ type: 'UPDATE_ACTIVITY', payload: data });
        } catch (error) {
            console.error(error.message);
        }
    };
};

export const orderCountries = (order) => {
    return { type: 'ORDER', payload: order }
}
export const filterCountries = (continent) => {
    return { type: 'FILTER', payload: continent }
}
export const filterActivity = (id) => {
    return { type: 'FILTER_ACTIVITY', payload: id }
}