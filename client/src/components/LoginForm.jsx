import { LOGIN } from "../gql/mutations";
import { LIST_RECIPES } from "../gql/queries";
const { useMutation } = require("@apollo/client");
const { useState } = require("react");

const LoginForm = ({ setUser }) => {
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
                setUser(data);
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
                <label>User</label>
                <input type="text" onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="form-field">
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}

export default LoginForm;