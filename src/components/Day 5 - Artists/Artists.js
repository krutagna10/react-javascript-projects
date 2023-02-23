import {useState} from 'react';
import ArtistsList from "./ArtistsList";
import ArtistsForm from "./ArtistsForm";
import './Artists.css';

const initialArtists = [
    {id: 0, name: 'Marta Colvin Andrade'},
    {id: 1, name: 'Lamidi Olonade Fakeye'},
    {id: 2, name: 'Louise Nevelson'},
];

const Artists = () => {
    const [artists, setArtists] = useState(initialArtists);

    const handleAddArtist = (data, index) => {
        // Cases => index = 0 | index between 0 and n | index = n
        let nextArtists;
        if (index === 0) {
            nextArtists = [data, ...artists];
        }

        if (index === artists.length) {
            nextArtists = [...artists, data];
        }

        if (index > 0 && index < artists.length) {
            nextArtists = [
                ...artists.slice(0, index),
                data,
                ...artists.slice(index)
            ];
        }
        setArtists([...nextArtists]);
    };

    const handleDelete = (deleteIndex) => {
        const nextArtists = artists.filter((_, index) => deleteIndex !== index);
        setArtists([...nextArtists]);
    }

    return (
        <div className='artists' style={{minHeight: '100vh', display: 'grid', placeContent: 'center'}}>
            <h2 style={{textAlign: 'center', marginBottom: '1rem'}}>Inspiring Sculptors</h2>
            <ArtistsForm
                onAddArtist={handleAddArtist}
                artists={artists}
            />
            <ArtistsList
                artists={artists}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default Artists;