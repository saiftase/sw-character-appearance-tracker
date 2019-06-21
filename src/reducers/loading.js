export const loading = (state = false, action) => {
    switch (action.type) {
        case 'GET_CHARACTERS':
            return true;
        case 'GET_CHARACTERS_RECEIVED':
            return false;
        default:
            return state
    }
}
