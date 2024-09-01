import React, { useState } from 'react';
import './calculator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareRootAlt } from '@fortawesome/free-solid-svg-icons';

function Calculator() {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput('');
    };

    const handleAllClear = () => {
        setInput('');
    };

    const handleEqual = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput("Error");
        }
    };

    const handleSquareRoot = () => {
        try {
            setInput(Math.sqrt(parseFloat(input)).toString());
        } catch (error) {
            setInput("Error");
        }
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div className='c1'>
            <div className='calculator'>
                <input 
                    type="text" 
                    value={input} 
                    onChange={handleInputChange} 
                    className='calculator-input' 
                />
                
                <div className='button'>
                    <button onClick={() => handleClick('7')}>7</button>
                    <button onClick={() => handleClick('8')}>8</button>
                    <button onClick={() => handleClick('9')}>9</button>
                    <button onClick={() => handleClick('/')}>/</button>
                    
                    <button onClick={() => handleClick('4')}>4</button>
                    <button onClick={() => handleClick('5')}>5</button>
                    <button onClick={() => handleClick('6')}>6</button>
                    <button onClick={() => handleClick('*')}>*</button>

                    <button onClick={() => handleClick('1')}>1</button>
                    <button onClick={() => handleClick('2')}>2</button>
                    <button onClick={() => handleClick('3')}>3</button>
                    <button onClick={() => handleClick('-')}>-</button>

                    <button onClick={handleSquareRoot}><FontAwesomeIcon icon={'faSquareRootAlt'}/></button>
                    <button onClick={() => handleClick('0')}>0</button>
                    <button onClick={handleEqual}>=</button>
                    <button onClick={() => handleClick('+')}>+</button>
                    
                    <button onClick={handleAllClear} className="clear">AC</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
