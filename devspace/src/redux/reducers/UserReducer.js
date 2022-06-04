import { ADD_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/UserAction'
import { initialState } from '../store'

export default function favouriteReducer(state = initialState.currentUser, action) {
    console.log(action, state);

    const { type, payload } = action;

    switch (type) {
        case ADD_CURRENT_USER: 
            return { 
                ...state,
                user: [ payload ],
            }
        case REMOVE_CURRENT_USER:
            return {
                ...state,
                user: state.user.filter((user) => user !== payload),
            };
        default: 
            return state;
    }
}