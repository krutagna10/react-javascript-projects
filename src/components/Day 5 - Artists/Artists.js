import { useState } from "react";
import ArtistsList from "./ArtistsList";
import ArtistsForm from "./ArtistsForm";
import uuid from "react-uuid";

const initialArtists = [
  { id: uuid(), name: "Marta Colvin Andrade" },
  { id: uuid(), name: "Lamidi Olonade Fakeye" },
  { id: uuid(), name: "Louise Nevelson" },
];

const Artists = () => {
  const [artists, setArtists] = useState(initialArtists);

  const handleAddArtist = ({ name }, index) => {
    const newArtist = {
      id: uuid(),
      name: name,
    };

    if (index === 0) {
      setArtists((prevArtists) => [newArtist, ...prevArtists]);
    }

    if (index === artists.length) {
      setArtists((prevArtists) => [...prevArtists, newArtist]);
    }

    if (index > 0 && index < artists.length) {
      setArtists((prevArtists) => [
        ...prevArtists.slice(0, index),
        newArtist,
        ...prevArtists.slice(index),
      ]);
    }
  };

  const handleDelete = (deleteId) => {
    setArtists((prevArtists) => {
      const updatedArtists = prevArtists.filter((artist) => {
        return deleteId !== artist.id;
      });
      return updatedArtists;
    });
  };

  return (
    <div className="artists" style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: "1rem" }}>Inspiring Sculptors</h1>
      <ArtistsForm onAddArtist={handleAddArtist} artists={artists} />
      {artists.length === 0 ? (
        <h3>No artists found</h3>
      ) : (
        <ArtistsList artists={artists} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default Artists;
