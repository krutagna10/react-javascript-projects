const RecipeList = ({ recipes }) => {
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
        {recipes.map(({ recipe }, index) => (
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
                    <ul>
                      {recipe.ingredientLines
                        .slice(0, 3)
                        .map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecipeList;
