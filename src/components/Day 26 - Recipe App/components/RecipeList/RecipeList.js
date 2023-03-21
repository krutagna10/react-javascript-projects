import React from "react";
import RecipeItem from "../RecipeItem/RecipeItem";

const RecipeList = ({ recipes, searchTerm }) => {
  const filteredRecipes = recipes.filter((item) => {
    return item.recipe.label.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Title</th>
          <th>Image</th>
          <th>Calories</th>
          <th>Ingredients</th>
        </tr>
      </thead>
      <tbody>
        {filteredRecipes.length === 0 ? (
          <tr>
            <td colSpan="5">No such recipe found</td>
          </tr>
        ) : (
          <React.Fragment>
            {filteredRecipes.map((item, index) => (
              <RecipeItem index={index} recipe={item.recipe} />
            ))}
          </React.Fragment>
        )}
      </tbody>
    </table>
  );
};

export default RecipeList;
