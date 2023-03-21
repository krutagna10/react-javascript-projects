import React from "react";

const RecipeItem = ({ index, recipe }) => {
  return (
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
        <table style={{ textAlign: "left" }}>
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
  );
};

export default RecipeItem;
