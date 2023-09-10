import React, { createContext, useContext, useReducer } from "react";


const cartreducer = (cartState, action) => {

    switch (action.type) {
        case "ADD":

            const exisitingItemIndex = cartState.items.findIndex(item => item.id === action.payload.id);

            if (exisitingItemIndex !== -1) {
                const updatedItems = [...cartState.items];
                updatedItems[exisitingItemIndex]={
                    ...updatedItems[exisitingItemIndex],
                    amount:updatedItems[exisitingItemIndex].amount+action.payload.amount
                }
                const updatedTotalPrice = cartState.totalPrice + action.payload.price * (action.payload.amount);
                return {
                    items: updatedItems,
                    totalPrice: updatedTotalPrice
                };
            }
            else {
                const updatedItems = [...cartState.items, {...action.payload,amount:1}]
                const updatedTotalPrice = cartState.totalPrice + action.payload.price;
                return {
                    items: updatedItems,
                    totalPrice: updatedTotalPrice
                };
            }
        case "REMOVE":
            const itemToRemove=cartState.items.find(item => item.id === action.payload.id);

            if(!itemToRemove){
                return cartState;
            }

            const updatedItems = cartState.items.filter((item) => {
                return item.id !== action.payload.id
            })
            const updatedtotalPrice = cartState.totalPrice - (itemToRemove.price * itemToRemove.amount);
            return {
                items: updatedItems,
                totalPrice: updatedtotalPrice
            };
        case "CLEAR":

            return {
                items:[],
                totalPrice:0
            };
        default:
            return cartState;
    }

}

const initialCartState = {
    items: [],
    totalPrice: 0
}

export const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const MyContextProvider = ({ children }) => {

    const [cartState, dispatchCartActions] = useReducer(cartreducer, initialCartState);

    const value = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addToCart: (product) => {
            dispatchCartActions({ type: "ADD", payload: product })
        },
        removeFromCart: (product) => {
            dispatchCartActions({ type: "REMOVE", payload: product })

        },
        resetTheCart: () => {
             dispatchCartActions({type:"CLEAR",payload:""})
        }

    };

    return <MyContext.Provider value={value}>{children}</MyContext.Provider>

}