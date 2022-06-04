export const ADD_CURRENT_USER = 'ADD_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

export const addCurrentUserAction = (data) => ({
    type: ADD_CURRENT_USER,
    payload: data,
})

export const removeCurrentUserAction = (index) => ({
    type: REMOVE_CURRENT_USER,
    payload: index,
})