const token = localStorage.getItem('auth-token');

const initalState = {
    isLoggedIn: token ? true : false,
    loggedInUser: {},
    userRole: {
        driver: false,
        patient: false
    }
};

export const rootReducer = (state = initalState, action) => {
    switch(action.type) {
        case 'SET_LOGGEDIN_USER':
            return {...state, loggedInUser: action.payload};
        case 'SET_LOGGEDIN':
            return{...state, isLoggedIn: action.payload};
        case 'SET_DRIVER_ROLE':
            return {...state, userRole: { driver: action.payload}};
        case 'SET_PATIENT_ROLE':
            return{...state, userRole: { patient: action.payload}};
        default:
            return {...state};
    }
}