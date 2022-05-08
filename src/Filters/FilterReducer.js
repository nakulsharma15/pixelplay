export const filterReducer = (state,action) => {
    switch(action.type){
        case "SETFILTER":
            return{...state,filterSelected: action.payload}
    }
}
