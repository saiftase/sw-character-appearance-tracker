export const loading = (state = false, action) => {
    switch (action.type) {
        case 'GET_CHARACTERS':
            return true;
        case 'GET_MOVIES':
            return true;
        case 'GET_CHARACTERS_ERROR':
            return false;
        case 'GET_MOVIES_ERROR':
            return false;
        case 'GET_CHARACTERS_RECEIVED':
            return false;
        case 'GET_MOVIES_RECEIVED':
            return false;
        default:
            return state
    }
}
