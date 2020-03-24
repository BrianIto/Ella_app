import Actions from "../actions/actions";

const initialState = {
    userLogged: null,
    daySelected: null,
}

const GeneralReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case Actions.setUserLogged:
            return {...state, userLogged: payload};
        case Actions.selectDay:
            return {...state, daySelected: payload};
        default:
            return state;
    }
};

export default GeneralReducer;
