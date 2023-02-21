import './BirthdayRemainder.css';
import data from './data'
import {useState} from "react";

const List = ({people}) => {
    return (
        <>
            {people.map((person => {
                const {id, name, age, image} = person;
                return (
                    <article key={id} className='person'>
                        <img src={image} alt={name}/>
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                )
            }))}
        </>
    );
}

function BirthdayRemainder() {
    const [people, setPeople] = useState(data);

    const handleClick = () => {
        setPeople([]);
    };

    return (
        <main>
            <section className='container'>
                <h3>{people.length} Birthdays Today</h3>
                <List people={people}/>
                <button onClick={handleClick}>Clear All</button>
            </section>
        </main>
    )
}

export default BirthdayRemainder;
