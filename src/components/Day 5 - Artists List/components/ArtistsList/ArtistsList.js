import React from "react";

const ArtistsTableHeader = () => {
  return (
    <thead>
      <tr>
        <td>Index</td>
        <td>Artist</td>
        <td>Delete Button</td>
      </tr>
    </thead>
  );
};

const ArtistTableBody = ({ artists, onDelete }) => {
  return (
    <tbody>
      {artists.map((artist, index) => (
        <tr key={index}>
          <td>{index}</td>
          <td>{artist.name}</td>
          <td>
            <button
              onClick={() => {
                onDelete(artist.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const ArtistsList = (props) => {
  return (
    <table>
      <ArtistsTableHeader />
      <ArtistTableBody {...props} />
    </table>
  );
};

export default ArtistsList;
