import { DECREMENT, INCREMENT } from "../Const Actions/counterConst";

export const Increment = () => {
    return { type: INCREMENT };
}

export const Decrement = () => {
    return { type: DECREMENT };
}
