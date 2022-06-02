export const userReducer = (state, { type, payload }) => {

  switch (type) {
    case "ADD_TO_HISTORY":
    case "REMOVE_FROM_HISTORY":
    case "CLEAR_HISTORY":
      return {
        ...state,
        history: payload,
      };

    case "ADD_TO_LIKED":
    case "REMOVE_FROM_LIKED":
      return {
        ...state,
        liked: payload
      };

    case "ADD_TO_WATCHLATER":
    case "REMOVE_FROM_WATCHLATER":
      return {
        ...state, watchlater: payload
      }


  }

}