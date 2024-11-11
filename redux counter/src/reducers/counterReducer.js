import { DECREMENT, INCREMENT } from "../Const Actions/counterConst";


const initialState =
{
    value: {

    }
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: return { ...state, value: state.value + 1 }
        case DECREMENT: return { ...state, value: state.value - 1 }

        default: return state;
    }
}

export default counterReducer;