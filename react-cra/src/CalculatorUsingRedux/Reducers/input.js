export default function inputField(state = '', action) {
    if (action.type === 'Input') {
        return action.payload;
    }
    return state;
}

