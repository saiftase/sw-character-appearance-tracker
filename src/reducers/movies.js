export const movies = (state = [], action) => {
    switch (action.type) {
        case 'GET_MOVIES_RECEIVED':
            return action.data;
        default:
            return state;
    }
}