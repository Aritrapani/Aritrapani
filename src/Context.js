import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = { user : null };

const reducer = (state, action) => {
    if (action.type === 'SET_USER')
        return { ...state , user : action.user }
    if (action.type === 'LOG OUT')
        return { ...state , user : null}
    else
        return state;
}

export const UserProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (<UserContext.Provider value={{ state, dispatch }}>
        {props.children}
    </UserContext.Provider>);
}