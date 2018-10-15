import {
  ADD_PLACE,
  DELETE_PLACE
} from "../actions/actionTypes";

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          placeName: action.placeName,
          placeImage: {
            uri:
              "http://www.helsinki.fi/kirjasto/files/2814/0005/0986/kumpula.jpg"
          }
        })
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        })
      };

    default:
      return state;
  }
};

export default reducer;
