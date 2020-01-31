const initalState = {
    loggedInUser: {
        email: '',
        password: '',
    }
};

export const rootReducer = (state = initalState, action) => {
    switch(action.type) {
        case 'SET_LOGGEDIN_USER':
            return {...state, loggedInUser:{
                ...state.loggedInUser, 
                email: action.payload.loggedInUser.email,
                password: action.payload.loggedInUser.password,
            } };
    }
}