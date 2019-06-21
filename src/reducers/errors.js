export const errors = (state = false, action) => {
    switch (action.type) {
        case 'GET_MOVIES':
            return false;
        case 'GET_MOVIES_ERROR':
            return true;
        case 'GET_MOVIES_RECEIVED':
            return false;
        default:
            return state
    }
}
