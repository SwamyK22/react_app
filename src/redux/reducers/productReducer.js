const initValue = [];

export const productReducer = (state = initValue, { type, payload }) => {
    switch(type) {
        case '':
            return payload;
        default:
            return state;
    }
};
