import { gql } from "@apollo/client";

const LOGIN = gql`
    mutation login($name: String!, $password: String!) {
        login(user_name: $name, password: $password) {
            id
            user_name
        }
    }
`
const LOGOUT = gql`
    mutation logout{logout}
    `

export {
    LOGIN,
    LOGOUT
}