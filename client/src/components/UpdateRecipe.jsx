import { GET_RECIPE, LIST_RECIPES } from "../gql/queries";
import { UPDATE_RECIPE } from "../gql/mutations";
import './UpdateRecipe.css'
const { useMutation, useQuery } = require("@apollo/client");


const RECIPE_PROPERTIES = ["id", "recipe_name", "ingredients", "flavor_profile", "prep_time", "cook_time", "instructions"]


const UpdateRecipe = ({ id, setEditRecipe, setActiveContent }) => {
    const [updateRecipeFunction, {}] = useMutation(UPDATE_RECIPE, {
        refetchQueries: [
            {
                query: LIST_RECIPES
            }
        ]
    });

    const { loading, error, data } = useQuery(GET_RECIPE, {
        variables: {
            id: id,
        }
    });
    
    if (loading) {
        return (
            <p>Loading...</p>
        );
    }

    if (error) {
        return (
            <p>Error: {error.message}</p>
        );
    }

    var recipe = {};
    Object.keys(data.getRecipeById).filter( key => RECIPE_PROPERTIES.includes(key)).forEach(key => recipe[key] = data.getRecipeById[key]);

    function updateRecipe(event) {
        event.preventDefault();

        updateRecipeFunction({
            variables: recipe,
            onCompleted: data => {
                setEditRecipe(null);
                setActiveContent('home')
            }

        });
    }

    function updateData(new_data) {
        recipe = {...recipe, ...new_data};
        console.log(recipe);
    }

    return (
        <form className="update-recipe-form" onSubmit={e => updateRecipe(e)}>
            <div className="form-field">
                <label>Update Recipe Name</label>
                <input className="field" type="text" defaultValue={recipe.recipe_name} onBlur={(e) => updateData({recipe_name: e.target.value})}/>
            </div>
            <div className="form-field">
                <label>Ingredients</label>
                <textarea rows="5" cols="30" className="field" type="text" defaultValue={recipe.ingredients} onBlur={(e) => updateData({ingredients: e.target.value})} />
            </div>
            <div className="form-field">
                <label>Flavor Profile</label>
                <input className="field" type="text" defaultValue={recipe.flavor_profile} onBlur={(e) => updateData({flavor_profile: e.target.value})} />
            </div>
            <div className="form-field">
                <label>Prep Time</label>
                <input className="field" type="text" defaultValue={recipe.prep_time} onBlur={(e) => updateData({prep_time: parseInt(e.target.value)})} />
            </div>
            <div className="form-field">
                <label>Cook Time</label>
                <input className="field" type="text" defaultValue={recipe.cook_time} onBlur={(e) => updateData({cook_time: parseInt(e.target.value)})} />
            </div>
            <div className="form-field">
                <label>Instructions</label>
                <textarea rows="5" cols="30" className="field" type="text" defaultValue={recipe.instructions} onBlur={(e) => updateData({instructions: e.target.value})} />
            </div>
            <div>
                <button>Update Recipe</button>
            </div>
        </form>
    )
};


export default UpdateRecipe;