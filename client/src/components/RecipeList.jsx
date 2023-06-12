import { LIST_RECIPES } from "../gql/queries";
import { DELETE_RECIPE } from "../gql/mutations";
import './RecipeList.css';
import Recipe from "./Recipe";
const { useQuery } = require("@apollo/client");
const { useState } = require("react");


const RecipeList = ({ setEditRecipe, setActiveContent }) => {
    const { loading, error, data } = useQuery(LIST_RECIPES);

    if (loading) {
        return (<p>Loading...</p>);
    }

    if (error) {
        return (<p>Error: {error.message}</p>);
    }

    if (!data.getAllRecipes) {
        return (<p>Login Required</p>);
    }

    const recipes = data.getAllRecipes;

    const rendered = recipes.map(recipe => {
        return <Recipe recipe={recipe} key={recipe.id} setEditRecipe={setEditRecipe} setActiveContent={setActiveContent}/>
    });
    return (
        <div className="recipe-list-content">
            <h2>Recipes</h2>
            <div className="recipe-list">
                { rendered }
            </div>
        </div>
    )
}

export default RecipeList;