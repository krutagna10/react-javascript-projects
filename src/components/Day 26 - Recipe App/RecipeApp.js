import Input from "./Input";
import RecipeList from "./RecipeList";
import { useState, useEffect } from "react";

const appId = "57a4e977";
const appKey = "9fcd7095a3aa0556565bbd33281979c1";
const url =
  "https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=57a4e977&app_key=9fcd7095a3aa0556565bbd33281979c1";

const RecipeApp = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getRecipes = () => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Data not found");
      })
      .then((data) => {
        console.log(data.hits);
        console.log(data.hits[0].recipe);
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

  return (
    <div style={{ maxWidth: "58.25rem" }}>
      <h1>Recipe App</h1>
      <Input />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default RecipeApp;
