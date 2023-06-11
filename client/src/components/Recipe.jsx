const Recipe = ({ recipe }) => {
    return (
        <div className="recipe">
        <div className="info-bar">
            <div className="user-name">
                {recipe.user.name}
            </div>
            <div className="recipe-name">
                {recipe.name}
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
    </div>
    )
}

export default Recipe;