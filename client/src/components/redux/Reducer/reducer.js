import {
  ALL_DOGS,
  DOG_BY_ID,
  FILTER,
  ORDER,
  DOG_BY_NAME,
} from "../Actions/actions";

const initialState = {
  dogsById: [],
  allDogs: [],
  dogsByName: [],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ALL_DOGS:
      return { ...state, allDogs: payload };

    case DOG_BY_ID:
      return { ...state, dogsById: payload };

    case FILTER:
      if (payload === "all") {
        return { ...state, myFavorites: [...state.allCharacters] };
      } else {
        const filteredCharacters = state.allCharacters.filter(
          (char) => char.gender === payload
        );
        return { ...state, allCharacters: filteredCharacters };
      }

    case ORDER:
      const sortedCharacters = [...state.allCharacters]; // Crear una copia del array de todos los personajes
      if (payload === "A") {
        sortedCharacters.sort((a, b) => a.id - b.id);
      } else if (payload === "D") {
        sortedCharacters.sort((a, b) => b.id - a.id);
      }
      return { ...state, allCharacters: sortedCharacters };
    case DOG_BY_NAME:
      return { ...state, dogsByName: payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
