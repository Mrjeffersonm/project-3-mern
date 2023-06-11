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

export {
    LIST_RECIPES,
}