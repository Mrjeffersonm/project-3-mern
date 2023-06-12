import { ADD_RECIPE } from "../gql/mutations";
import { LIST_RECIPES } from "../gql/queries";
import './NewRecipe.css'
const { useMutation } = require("@apollo/client");
const { useState } = require("react");

const NewRecipe= () => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [flavorProfile, setFlavorProfile] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [instructions, setInstructions] = useState('');
    const [addRecipeFunction, { loading, error }] = useMutation(ADD_RECIPE, {
        refetchQueries: [
            {
                query: LIST_RECIPES
            }
        ]
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

    function addRecipe(event) {
        event.preventDefault();

        addRecipeFunction({
            variables: {
                recipe_name: recipeName,
                ingredients: ingredients,
                flavor_profile: flavorProfile,
                prep_time: parseInt(prepTime),
                cook_time: parseInt(cookTime),
                instructions: instructions
            },

        });
    }

    return (
        <form className="add-recipe-form" onSubmit={e => addRecipe(e)}>
            <div className="form-field">
                <label>Recipe Name</label>
                <input className="field" type="text" onBlur={(e) => setRecipeName(e.target.value)} />
            </div>
            <div className="form-field">
                <label>Ingredients</label>
                <textarea className="field" rows="5" cols="30" type="text"  onBlur={(e) => setIngredients(e.target.value)} />
            </div>
            <div className="form-field">
                <label>Flavor Profile</label>
                <input className="field" type="text" onBlur={(e) => setFlavorProfile(e.target.value)} />
            </div>
            <div className="form-field">
                <label>Prep Time</label>
                <input className="field" type="text" onBlur={(e) => setPrepTime(e.target.value)} />
            </div>
            <div className="form-field">
                <label>Cook Time</label>
                <input className="field" type="text" onBlur={(e) => setCookTime(e.target.value)} />
            </div>
            <div className="form-field">
                <label>Instructions</label>
                <textarea className="field" rows="5" cols="30" type="text" onBlur={(e) => setInstructions(e.target.value)} />
            </div>
            <div>
                <button>Add Recipe</button>
            </div>
        </form>
    )
};


export default NewRecipe;