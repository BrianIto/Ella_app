import Actions from "../actions/actions";

const initialState = {
    userLogged: null,
}

const GeneralReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case Actions.setUserLogged:
            return {...state, userLogged: payload};
        default:
            return state;
    }
};

export default GeneralReducer;
