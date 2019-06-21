export const characters = (state = [], action) => {
    switch (action.type) {
        case 'GET_CHARACTERS_RECEIVED':
            return action.data;
        default:
            return state;
    }
}
