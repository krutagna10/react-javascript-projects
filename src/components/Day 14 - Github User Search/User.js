import React from "react";

const User = ({ user, searchTerm }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>User Profile</th>
          <th>User Name</th>
          <th>Github Link</th>
          <th>Followers</th>
          <th>Following</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              src={user["avatar_url"]}
              alt={user.name}
              style={{
                width: "5rem",
                height: "5rem",
              }}
            />
          </td>
          <td>{searchTerm}</td>
          <td>
            <a href={user["html_url"]}>{searchTerm}</a>
          </td>
          <td>{user.followers}</td>
          <td>{user.following}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default User;
