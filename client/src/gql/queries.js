import { gql } from "@apollo/client";

const LIST_RECIPES = gql`
    query {
        getAllRecipes {
            id
            recipe_name
            user {
                user_name
            }
            ingredients
            flavor_profile
            prep_time
            cook_time
            instructions
        }
    }
`;

const GET_RECIPE = gql`
    query getRecipeById($id: ID!) {
        getRecipeById(id: $id) {
            id
            recipe_name
            ingredients
            flavor_profile
            prep_time
            cook_time
            instructions
        }    
    }
`
const GET_USER = gql`
   query {
	getUser {
		id
		user_name
	}
}
 `
export {
    LIST_RECIPES,
    GET_RECIPE,
    GET_USER,
}