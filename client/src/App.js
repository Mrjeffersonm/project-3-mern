import { useState } from "react";
import { LoginForm, RecipeList, Logout } from "./components/index";

function App() {
  const [ user, setUser ] = useState();
  const [ viewPage, setViewPage ] = useState("login");
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="App-Content">
        <LoginForm setUser={ setUser } />
        <Logout setUser={ setUser }/>
        <RecipeList />
      </div>
    </div>
  );
}

export default App;