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
                <div className="label">Ingredients</div>
                <div className="value">
                    {recipe.ingredients}
                </div>
            </div>
            <div className="flavor-profile">
                <div className="label">Flavor Profile</div>
                <div className="value">
                    {recipe.flavor_profile}
                </div>
            </div>
            <div className="prep-time">
                <div className="label">Prep Time</div>
                <div className="value">
                    {recipe.prep_time} Minutes
                </div>
            </div>
            <div className="cook-time">
                <div className="label">Cook Time</div>
                <div className="value">
                    {recipe.cook_time} Minutes
                </div>
            </div>
            <div className="instructions">
                <div className="label">Instructions</div>
                <div className="value">
                    {recipe.instructions}
                </div>
            </div>
            <div className="edit-bar">
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
        </div>
    )
}

export default Recipe;