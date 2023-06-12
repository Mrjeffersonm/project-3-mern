import { LOGIN } from "../gql/mutations";
import { LIST_RECIPES } from "../gql/queries";
import './Login.css';
const { useMutation } = require("@apollo/client");
const { useState } = require("react");

const LoginForm = ({ setUser, setActiveContent }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loginFunction, { loading, error, data }] = useMutation(LOGIN);

    if (loading) {
        return (
            <p>Logging in...</p>
        );
    }

    if (error) {
        return (
            <p>Error: {error.message}</p>
        );
    }

    function login(event) {
        event.preventDefault();

        loginFunction({
            variables: {
                name: userName,
                password: password,
            },
            onCompleted: data => {
                setUser(data.login);
                if (data.login) {
                    setActiveContent('home');
                }
            },
            refetchQueries: [
                {
                    query: LIST_RECIPES
                }
            ]
        });
    }

    return (
        <form className="login-form" onSubmit={e => login(e)}>
            <div className="form-field">
                <label>Username</label>
                <input type="text" onBlur={(e) => setUserName(e.target.value)} />
            </div>
            <div className="form-field">
                <label>Password</label>
                <input type="password" onBlur={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <button>Login</button>
                <button className="new-user" onClick={_ => setActiveContent('new-user')}>Create Account</button>
            </div>
        </form>
    )

}

export default LoginForm;