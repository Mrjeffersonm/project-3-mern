import { DELETE_RECIPE } from "../gql/mutations";
import { LIST_RECIPES } from "../gql/queries";
import './Recipe.css';
const { useMutation } = require("@apollo/client");

const Recipe = ({ recipe, setEditRecipe, setActiveContent }) => {
    const [deleteFunction, { loading, error, data }] = useMutation(DELETE_RECIPE);

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

    function deleteRecipe(id) {
        deleteFunction({
            variables: {
                id: id,
            },
            refetchQueries: [
                {
                    query: LIST_RECIPES
                }
            ]
        });
    }



    return (
        <div className="recipe">
            <div className="info-bar">
                <div className="user-name">
                    {recipe.user.user_name}
                </div>
                <div className="recipe-name" >
                    {recipe.recipe_name}
                </div>

            </div>
            <div className="ingredients">
                {recipe.ingredients}
            </div>
            <div className="flavor-profile">
                {recipe.flavor_profile}
            </div>
            <div className="prep-time">
                {recipe.prep_time}
            </div>
            <div className="cook-time">
                {recipe.cook_time}
            </div>
            <div className="instructions">
                {recipe.instructions}
            </div>
            <div className="edit-recipe">
                <button onClick={event => {
                    setEditRecipe(recipe.id);
                    setActiveContent('edit-recipe');
                }
                }>Edit</button>
            </div>
            <div className="delete-recipe">
                <button onClick={event => deleteRecipe(recipe.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Recipe;