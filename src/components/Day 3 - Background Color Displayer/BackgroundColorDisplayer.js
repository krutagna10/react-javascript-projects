import {useState} from 'react';

const BackgroundColorDisplayer = () => {
    const [inputColor, setInputColor] = useState('');

    const style = {
        display: 'grid',
        placeContent: 'center',
        width: '6rem',
        height: '6rem',
        border: '1px solid black'
    }

    const inputChangeHandler = (event) => {
        setInputColor(event.target.value);
    }

    return (
        <div>
            <div className='container' style={{...style, backgroundColor: inputColor}}>
                {inputColor}
            </div>
            <input
                type='text'
                placeholder='Enter a color'
                onChange={inputChangeHandler}
            />
        </div>
    );
};

export default BackgroundColorDisplayer;