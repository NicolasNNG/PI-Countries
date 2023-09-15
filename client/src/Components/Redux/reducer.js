const initialState = {
  allCountries: [], //Lista de todos los países
  copiedCountries: [], //Una copia de la lista de todos los países
  countryDetail: [], //Detalles de un país seleccionado
  allActivities: [], //Lista de todas las actividades
  countryActivities: [], //Actividades de un país específico
};

// Reducer que gestiona las acciones y actualiza el estado
const reducer = (state = initialState, { type, payload }) => {
  let copiedAllCountries;
  switch (type) {
    case "GET_ALL_COUNTRIES":
      // Actualiza la lista de todos los países y su copia, ordenándolos alfabéticamente por nombre
      return {
        ...state,
        allCountries: payload.sort((a, b) => a.name.localeCompare(b.name)),
        copiedCountries: payload.sort((a, b) => a.name.localeCompare(b.name)),
      };
    case "GET_COUNTRY_BY_NAME":
      return {
        ...state,
        allCountries: payload,
      };
    case 'GET_COUNTRY_DETAIL':
      return {
        ...state,
        countryDetail: payload,
        countryActivities: payload.Activities,
      };
    case "ORDER":
      copiedAllCountries = [...state.allCountries];
      // Ordena la lista de todos los países según el tipo de orden especificado en la carga útil (payload)
      return {
        ...state,
        allCountries:
          payload === "A" //('A' para orden ascendente
            ? copiedAllCountries.sort((a, b) => a.name.localeCompare(b.name))
            : payload === "B" //'B' para orden descendente
            ? copiedAllCountries.sort((a, b) => b.name.localeCompare(a.name))
            : payload === "AP" //AP' para orden descendente por población, y 'DP' para orden ascendente por población).
            ? copiedAllCountries.sort((a, b) => b.population - a.population)
            : copiedAllCountries.sort((a, b) => a.population - b.population),
      };
    case "FILTER":
      // Filtra la lista de países según el continente especificado en la carga útil (payload)
      return {
        ...state,
        allCountries: payload,
      };
    case "GET_ALL_ACTIVITIES":
      // Actualiza la lista de todas las actividades
      return {
        ...state,
        allActivities: payload,
      };
    case "POST_ACTIVITY":
      // Agrega una nueva actividad a la lista de actividades
      return {
        ...state,
        allActivities: [...state.allActivities, payload],
      };
    case "DELETE_ACTIVITY":
      // Elimina una actividad de la lista de actividades y actualiza las relaciones con los países
      return {
        ...state,
        allActivities: state.allActivities.filter(
          (activity) => activity.id !== payload
        ),
        // También se actualizan las actividades en el país seleccionado y las actividades de un país específico
        // según la eliminación de la actividad
        selectedCountry: {
          ...state.selectedCountry,
          Activities: state.selectedCountry.Activities.filter(
            (activity) => activity.Countries_Activities.ActivityId !== payload
          ),
        },
        countryActivities: state.countryActivities.filter(
          (activity) => activity.Countries_Activities.ActivityId !== payload
        ),
      };
    // Otros casos para otras acciones
    default:
      return { ...state };
  }
};

export default reducer;
