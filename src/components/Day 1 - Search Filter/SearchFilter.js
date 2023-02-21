import {useState} from "react";
import JSONDATA from './MOCK_DATA.json';

function SearchFilter() {
    const [searchTerm, setSearchTerm] = useState('');

    const setTermHandler = (event) => {
        setSearchTerm((event.target.value).toLowerCase());
    }

    return (
        <div className="app" style={{display: 'grid', placeItems: 'center'}}>
            <input
                type='text'
                placeholder='Search...'
                onChange={setTermHandler}
            />
            {JSONDATA.filter(element => {
                return element.first_name.toLowerCase().includes(searchTerm);
            }).map((element, index) => (
                <p key={index}>{element.first_name}</p>
            ))}
        </div>
    );
}

export default SearchFilter;