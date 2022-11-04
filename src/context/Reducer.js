export const ClientReducer = (state, action) => {
    switch (action.type) {
        case "INIT": {
            const { clients } = action.payload
            return {
                ...state,
                clients: clients,
                selected_client: clients[0]
            };
        }

        case "CLIENT_SELECT": {
            return {
                ...state,
                selected_client: action.payload,
            };
        }

        default:
            return state;
    }
};