import React from "react";

function Menu({ items }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="4">No such items found</td>
            </tr>
          ) : (
            <React.Fragment>
              {items.map((item, index) => {
                const { id, title, img, price } = item;
                const upperCaseTitle = title
                  .split(" ")
                  .map((item) => {
                    return item[0].toUpperCase() + item.slice(1);
                  })
                  .join(" ");

                return (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>{upperCaseTitle}</td>
                    <td>
                      <img
                        src={img}
                        alt={title}
                        style={{
                          width: "10rem",
                          height: "6rem",
                        }}
                      />
                    </td>
                    <td>${price}</td>
                  </tr>
                );
              })}
            </React.Fragment>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Menu;
