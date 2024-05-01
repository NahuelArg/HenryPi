import axios from "axios";
export const ALL_DOGS = 'ALL_DOGS';
export const DOG_BY_ID = 'DOG_BY_ID';
export const FILTER= "FILTER";
export const ORDER= "ORDER";
export const DOG_BY_NAME = "DOG_BY_NAME";


export const allDogs = () => {
  const endpoint = "http://localhost:3001";
  return async (dispatch) => {
      try {
          let response = await axios.get(`${endpoint}/dogs`);
          dispatch({
              type: ALL_DOGS,
              payload: response.data
          });
      } catch (error) {
          console.log(error.message);
      }
  };
};

export const dogsById = (id) => {
  const endpoint = `http://localhost:3001/dogs/${id}`;
  return async (dispatch) => {
      try {
          await axios.get(endpoint);
          dispatch({
              type: DOG_BY_ID,
              payload: id,
          });
      } catch (error) {
          console.log(error.message);
      }
  };
};
export const actionsDogByName = (name) => {
  const endpoint = `http://localhost:3001/dogs/${name}`;
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

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
}

export const orderCards = (orden) => {
  return { type: ORDER, payload: orden };
}