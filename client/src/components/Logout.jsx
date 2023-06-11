import { LOGOUT } from "../gql/mutations";
import { LIST_RECIPES } from "../gql/queries";
const { useMutation } = require("@apollo/client");
const { useState } = require("react");

const Logout = ({ setUser }) => {
    const [logoutFunction, { loading, error, data }] = useMutation(LOGOUT);
    function logout(_) {
        logoutFunction({
            onCompleted: data => setUser(null),
            refetchQueries: [
                {
                    query: LIST_RECIPES
                }
            ]
        });
    }
    return (
        <div className="logout-button">
            <button onClick={e => logout(e)}>Logout</button>
        </div>
    );;
};

export default Logout;