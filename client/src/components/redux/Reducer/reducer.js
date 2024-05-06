import {
  ALL_DOGS,
  DOG_BY_ID,
  DOG_BY_NAME,
  allDogs,
} from "../Actions/actions";

const initialState = {
  dogsById: [],
  allDogs: [],
  dogsByName: [],
  detail:{}
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ALL_DOGS:
      return { ...state, allDogs: payload };

    case DOG_BY_ID:
      case "GET_DETAILS":
        return {
          ...state,
          detail: action.payload,
        };;

    case DOG_BY_NAME:
      return { ...state, allDogs: payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
