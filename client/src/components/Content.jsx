import './Content.css';
import LoginForm from './LoginForm';
import NewRecipe from './NewRecipe';
import NewUserForm from './NewUser';
import RecipeList from './RecipeList';
import UpdateRecipe from './UpdateRecipe';


const Content = ({ activeContent, setActiveContent, setUser, setEditRecipe, editRecipe }) => {

    if (activeContent === 'login') {
        return (
            <div className='centralContent'><LoginForm setUser={setUser} setActiveContent={setActiveContent} /></div>
        )
    }

    if (activeContent === 'new-user') {
        return (
            <div className='centralContent'><NewUserForm setUser={setUser} setActiveContent={setActiveContent}/></div>
        )
    }

    if (activeContent === 'home') {
        return (
            <div className='centralContent'><RecipeList setEditRecipe={setEditRecipe} setActiveContent={setActiveContent} /></div>
        )
    }

    if (activeContent === 'add-recipe') {
        return (
            <div className='centralContent'><NewRecipe /></div>
        )
    }

    if (activeContent === 'edit-recipe') {
        return (
            <div className='centralContent'><UpdateRecipe id={editRecipe} setEditRecipe={setEditRecipe} setActiveContent={setActiveContent}/></div>
        )
    }
};

export default Content;