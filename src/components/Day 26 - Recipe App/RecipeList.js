import React from "react";

const RecipeList = ({ recipes, searchTerm }) => {
  const filteredRecipes = recipes.filter((item) => {
    return item.recipe.label.toLowerCase().includes(searchTerm.toLowerCase());
  });

  console.log(filteredRecipes);

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
            {filteredRecipes.map(({ recipe }, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{recipe.label}</td>
                <td>
                  <img
                    src={recipe.image}
                    style={{ width: "10rem", height: "6rem" }}
                    alt={recipe.label}
                  />
                </td>
                <td>{recipe.calories.toFixed(0)}</td>
                <td>
                  <table className="flow" style={{ textAlign: "left" }}>
                    <tbody className="flow">
                      <tr>
                        <td>
                          <ul>
                            {recipe.ingredientLines
                              .slice(0, 3)
                              .map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                              ))}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
          </React.Fragment>
        )}
      </tbody>
    </table>
  );
};

export default RecipeList;
