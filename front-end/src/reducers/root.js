const token = localStorage.getItem('auth-token');

const initalState = {
    isLoggedIn: token ? true : false,
    loggedInUser: {}
};

export const rootReducer = (state = initalState, action) => {
    switch(action.type) {
        case 'SET_LOGGEDIN_USER':
            return {...state, loggedInUser: action.payload};
        case 'SET_LOGGEDIN':
            return{...state, isLoggedIn: action.payload};
        default:
            return {...state};
    }
}