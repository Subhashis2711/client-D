import React, { createContext, useContext, useEffect, useReducer } from 'react';
import configObject from '../config';
import { ClientReducer } from './Reducer';

const Client = createContext();

const Context = (props) => {
    const [state, dispatch] = useReducer(ClientReducer, {
        clients: [],
        selected_client: null,
    });

    const getClients = async () => {
        try {
            const response = await fetch(configObject.BASE_URL + 'clients');
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const onLoadHandler = async () => {
            const clientsData = await getClients();
            dispatch({
                type: "INIT",
                payload: clientsData
            });
        };
        onLoadHandler();
    }, []);

    return (
        <Client.Provider value={{ state, dispatch }}>
            {props.children}
        </Client.Provider>
    )
}

export default Context;

export const ClientState = () => {
    return useContext(Client);
};
