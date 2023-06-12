import { useState, useEffect } from "react";
import { Header, Content } from "./components/index";
import { GET_USER } from "./gql/queries";

function App() {
  const [user, setUser] = useState();
  const [editRecipe, setEditRecipe] = useState();
  const [activeContent, setActiveContent] = useState('login');
  // useEffect

  return (
    <div className="App">
      <header className="App-header">
        <Header setActiveContent={setActiveContent} activeContent={activeContent} setUser={setUser} user={user} />
      </header>
      <div className="App-Content">
        <Content
          user={user}
          setUser={setUser}
          setActiveContent={setActiveContent}
          activeContent={activeContent}
          setEditRecipe={setEditRecipe}
          editRecipe={editRecipe} 
        />
      </div>
    </div>
  );
}

export default App;