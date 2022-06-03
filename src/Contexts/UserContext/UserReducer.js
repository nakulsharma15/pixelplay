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

    case "CLEAR_ALL_PLAYLIST":
      return { ...state, playlists: [] };
    case "ADD_PLAYLIST":
    case "DELETE_PLAYLIST":
      return { ...state, playlists: payload };

    case "ADD_TO_PLAYLIST":
    case "DELETE_FROM_PLAYLIST":
      const updatedPlaylist = state.playlists?.map((item) =>
        item._id === payload?._id ? payload : item);
        
      return { ...state, playlists: updatedPlaylist };

    default:
      break;

  }

}