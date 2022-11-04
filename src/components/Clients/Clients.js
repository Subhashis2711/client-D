import React from "react";
import { ClientState } from "../../context/Context";
import ClientDetailBox from "./ClientDetailBox";
import ClientListbar from "./ClientListbar";

const Clients = () => {
    const {
        state: {selected_client: client},
    } = ClientState();

    return (
        <div>
            <ClientListbar />
            { client !== null && (<ClientDetailBox client={client}/>) }
        </div>
    );
};

export default Clients;
