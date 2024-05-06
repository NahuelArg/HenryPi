import axios from "axios";
export const ALL_DOGS = 'ALL_DOGS';
export const DOG_BY_ID = 'DOG_BY_ID';
export const FILTER= "FILTER";
export const ORDER= "ORDER";
export const DOG_BY_NAME = "DOG_BY_NAME";
export const ORDER_BY_PESO_MAX = 'ORDER_BY_PESO_MAX';
export const ORDER_BY_PESO_MIN = 'ORDER_BY_PESO_MIN';
export const ORDER_BY_TEMPERAMENT = 'ORDER_BY_TEMPERAMENT';
export const ORDER_BY_NAME= 'ORDER_BY_NAME';
export const FILTER_CREATED="FILTER CREATED"





export const allDogs = () => {
  const endpoint = "http://localhost:3001/dogs";
  return async (dispatch) => {
      try {
          let response = await axios.get(endpoint);
          dispatch({
              type: ALL_DOGS,
              payload: response.data
          });
      } catch (error) {
          console.log(error.message);
      }
  };
};

export function dogsById(id){
  const endpoint = `http://localhost:3001/dogs/${id}`;
  try {
  return async (dispatch) => {
        let response = await axios.get(endpoint);
          dispatch({
              type: DOG_BY_ID,
              payload: response.data
          });
      }
    } catch (error) {
        console.log(error.message);
  };
};
export const getNameDog = (name) => {
  const endpoint = `http://localhost:3001/dogs/name?name=${name}`;
  return async (dispatch) => {
      try {
          let response = await axios.get(endpoint);
          dispatch({
              type: DOG_BY_NAME,
              payload: response.data
          });
      } catch (error) {
          console.log(error.message);
      }
  };
};

export function filterCreated(payload){
    return{
        type: 'FILTER_CREATED',
        payload
    }
}  

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}


export function orderByTemperaments(payload) {
    console.log(payload)
       return {
          type: 'ORDER_BY_TEMPERAMENT',
          payload
       }
    }

    export function orderByPesoMin(payload) {
        return {
           type: 'ORDER_BY_PESO_MIN',
           payload
        }
     }
     
     export function orderByPesoMax(payload){
        return {
           type: 'ORDER_BY_PESO_MAX',
           payload
        }
     }
