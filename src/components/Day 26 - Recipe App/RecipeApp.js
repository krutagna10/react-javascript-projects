import Search from "./components/Search/Search";
import RecipeList from "./components/RecipeList/RecipeList";
import { useState, useEffect } from "react";

const url =
  "https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=57a4e977&app_key=9fcd7095a3aa0556565bbd33281979c1";

const RecipeApp = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const getRecipes = () => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Data not found");
      })
      .then((data) => {
        setRecipes(data.hits);
      })
      .catch((error) => alert(`${error.name}: ${error.message}`))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getRecipes();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div style={{ maxWidth: "58.25rem" }}>
      <h1>Recipe App</h1>
      <Search onSearch={handleSearch} />
      <RecipeList recipes={recipes} searchTerm={searchTerm} />
    </div>
  );
};

export default RecipeApp;
