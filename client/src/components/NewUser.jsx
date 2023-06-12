import { NEW_USER } from "../gql/mutations";
import { LIST_RECIPES } from "../gql/queries";
import './NewUser.css';
const { useMutation } = require("@apollo/client");
const { useState } = require("react");

const NewUserForm = ({ setUser, setActiveContent }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [newUserFunction, { loading, error, data }] = useMutation(NEW_USER);

    if (loading) {
        return (
            <p>Creating Account...</p>
        );
    }

    if (error) {
        return (
            <p>Error: {error.message}</p>
        );
    }

    function newUser(event) {
        event.preventDefault();

        newUserFunction({
            variables: {
                name: userName,
                password: password
            },
            onCompleted: data => {
                setUser(data.addUser);
                setActiveContent('home');
            },
            refetchQueries: [
                {
                    query: LIST_RECIPES
                }
            ]
        });
    }

    return (
        <form className="new-user-form" onSubmit={e => newUser(e)}>
            <div className="form-field">
                <label>Username</label>
                <input type="text" onBlur={(e) => setUserName(e.target.value)} required/>
            </div>
            <div className="form-field">
                <label>Password</label>
                <input type="password" onBlur={(e) => setPassword(e.target.value)} required/>
            </div>
            <div>
                <button>Create Account</button>
                <button className="login" onClick={_ => setActiveContent('login')}>Login Instead</button>
            </div>
        </form>
    )
};

export default NewUserForm;