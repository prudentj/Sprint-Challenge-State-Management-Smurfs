export const initialState = {
    smurfs: []
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            console.log('Added item to state')
            return { ...state, smurfs: [...state.smurfs, action.payload] };
        case "UPDATE_STATE":
            return { ...state, smurfs: action.payload }
        default:
            return state;
    }

};