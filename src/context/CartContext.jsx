import React, { createContext, useContext, useReducer } from 'react'


const CartStateContext = createContext()
const CartDispatchContext = createContext()


function cartReducer(state, action){
switch(action.type){
case 'ADD':{
const existing = state.items.find(i => i.id === action.item.id)
if(existing){
return { ...state, items: state.items.map(i => i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i) }
}
return { ...state, items: [...state.items, { ...action.item, qty: 1 }] }
}
case 'REMOVE':{
return { ...state, items: state.items.filter(i => i.id !== action.id) }
}
case 'CLEAR':
return { ...state, items: [] }
default:
throw new Error('Unknown action ' + action.type)
}
}


export function CartProvider({ children }){
    const [state, dispatch] = useReducer(cartReducer, { items: [] })
    return (
        <CartStateContext.Provider value={state}>
        <CartDispatchContext.Provider value={dispatch}>
        {children}
        </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    )
}


export function useCart(){
    return [useContext(CartStateContext), useContext(CartDispatchContext)]
}