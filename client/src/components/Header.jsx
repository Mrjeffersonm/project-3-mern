import React from "react";
import './Header.css';
import Navigation from "./Navigation";

const Header = ({activeContent, setActiveContent, setUser, user}) => {
    return (
        <div className="header">
        
            <h1 className="title">{user ? user.user_name : "Recipe Storage"}</h1>
            <Navigation
                activeContent={activeContent}
                setActiveContent={setActiveContent}
                setUser={setUser}
                user={user}
                />
        </div>
    )
};

export default Header;