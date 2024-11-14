import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:
    {
        cart: []
    },
    reducers:
    {
        addToCart: (state, action) => {
            const index = state.cart.findIndex((productCart) => productCart.id == action.payload.id);
            action.payload.quantity *= 1;
            if (index == -1)
                state.cart.push(action.payload);
            else
                state.cart[index].quantity += action.payload.quantity;
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((productCart) => productCart.id != action.payload);
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;



