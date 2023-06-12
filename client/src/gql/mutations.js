import { gql } from "@apollo/client";

const NEW_USER = gql`
    mutation addUser($name: String!, $password: String!) {
        addUser(user_name: $name, password: $password) {
            id
            user_name
        }
    }
`

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

const ADD_RECIPE = gql`
    mutation addRecipe(
        $recipe_name: String!, 
        $ingredients: String!,
        $flavor_profile: String!, 
        $prep_time: Int, 
        $cook_time: Int, 
        $instructions: String!
    ) {
        addRecipe(
            recipe_name: $recipe_name,
            ingredients: $ingredients,
            flavor_profile: $flavor_profile,
            prep_time: $prep_time,
            cook_time: $cook_time,
            instructions: $instructions,
        ) {
            recipe_name
            id    
        }
    }
`

const UPDATE_RECIPE = gql`
    mutation updateRecipe(
        $id: ID!,
        $recipe_name: String!, 
        $ingredients: String!,
        $flavor_profile: String!, 
        $prep_time: Int, 
        $cook_time: Int, 
        $instructions: String!
    ) {
        updateRecipe(
            id: $id,
            recipe_name: $recipe_name,
            ingredients: $ingredients,
            flavor_profile: $flavor_profile,
            prep_time: $prep_time,
            cook_time: $cook_time,
            instructions: $instructions,
        ) {
            recipe_name
            id    
        }
    }
`
const DELETE_RECIPE = gql`
    mutation deleteRecipe($id: ID!) {
        deleteRecipe(id: $id)
    }
`
export {
    LOGIN,
    LOGOUT,
    ADD_RECIPE,
    NEW_USER,
    UPDATE_RECIPE,
    DELETE_RECIPE,
}