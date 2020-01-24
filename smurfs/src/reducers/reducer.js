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
        case "SEND_TO_GULAG":
            console.log(`Item Clicked with id ${action.payload}`)
            if (state.smurfs.find(el => action.payload === el)) { console.log('Smurf processed') }
            else { console.log('Smurf Bribed Guard!') }
            return {
                ...state, smurfs: state.smurfs.filter(element => element !== action.payload)
            }
        default:
            return state;
    }

};