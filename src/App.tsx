import { useState } from 'react';

function App() {
    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');

    const ops = ['/', '*', '-', '+', '.'];

    const updateCalc = (value: string) => {
        if (
            (ops.includes(value) && calc === '') ||
            (ops.includes(value) && ops.includes(calc.slice(-1)))
        ) {
            return;
        }
        setCalc(calc + value);

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    };

    const createDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={() => updateCalc(i.toString())} key={i}>
                    {i}
                </button>
            );
        }

        return digits;
    };

    const calculate = () => {
        setCalc(eval(calc).toString());
    };

    const clear = () => {
        if (calc === '') {
            return;
        }

        const value = calc.slice(0, -1);
        setCalc(value);
    };
    return (
        <div className='App'>
            <div className='calculator'>
                <div className='display'>
                    {calc || '0'}
                    {result ? <span>({result})</span> : ''}
                </div>
                <div className='operators'>
                    <button onClick={() => updateCalc('/')}>/</button>
                    <button onClick={() => updateCalc('*')}>*</button>
                    <button onClick={() => updateCalc('-')}>-</button>
                    <button onClick={() => updateCalc('+')}>+</button>
                    <button onClick={clear}>Dell</button>
                </div>
                <div className='digits'>
                    {createDigits()}
                    <button onClick={() => updateCalc('0')}>0</button>
                    <button onClick={() => updateCalc('.')}>.</button>
                    <button onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    );
}

export default App;
