import image from "../../assets/item-1.jpeg";

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
          {items.map((item, index) => {
            const { id, title, img, price } = item;
            console.log(img);
            return (
              <tr key={id}>
                <td>{index}</td>
                <td>{title}</td>
                <td>
                  <img
                    src={img}
                    alt={title}
                    style={{
                      width: "8rem",
                      height: "5rem",
                    }}
                  />
                </td>
                <td>${price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Menu;
