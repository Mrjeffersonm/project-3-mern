import React from "react";
import './Navigation.css';
import { LOGOUT } from "../gql/mutations";
import { LIST_RECIPES } from "../gql/queries";
const { useMutation } = require("@apollo/client");

const Navigation = ({activeContent, setActiveContent, setUser, user}) => {
    const [logoutFunction, { loading, error, data }] = useMutation(LOGOUT);
    function logout(_) {
        logoutFunction({
            onCompleted: data => {
                setUser(null);
                setActiveContent('login');
            },
            refetchQueries: [
                {
                    query: LIST_RECIPES
                }
            ]
        });
    }
    if (!user) {
        return (
            <></>
        )
    }
    return (
        <div className="right-menu">
            <button className={activeContent === 'home' ? 'active' : 'inactive'} onClick={() => {setActiveContent('home')}}>Home</button>
            <button className={activeContent === 'add-recipe' ? 'active' : 'inactive'} onClick={() => {setActiveContent('add-recipe')}}>Add Recipe</button>
            <button className="logout inactive" onClick={event => logout()}>Logout</button>
        </div>
    )
};

export default Navigation;