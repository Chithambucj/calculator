import React, { useState } from 'react';
import Display from './components/Display';
import CalculatorButton from './components/CalculatorButton';

function App() {
  const [currentValue, setCurrentValue] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [history, setHistory] = useState('');
  const [isNewInput, setIsNewInput] = useState(true);

  const handleNumber = (num) => {
    if (isNewInput) {
      setCurrentValue(num);
      setIsNewInput(false);
    } else {
      setCurrentValue(currentValue === '0' ? num : currentValue + num);
    }
  };

  const handleOperator = (op) => {
    const current = parseFloat(currentValue);
    
    if (prevValue === null) {
      setPrevValue(current);
      setHistory(`${current} ${op}`);
    } else if (operator) {
      const result = calculate(prevValue, current, operator);
      setPrevValue(result);
      setHistory(`${result} ${op}`);
      setCurrentValue(String(result));
    }
    
    setOperator(op);
    setIsNewInput(true);
  };

  const calculate = (a, b, op) => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return b === 0 ? 'Error' : a / b;
      default: return b;
    }
  };

  const handleEqual = () => {
    if (!operator || prevValue === null) return;
    
    const current = parseFloat(currentValue);
    const result = calculate(prevValue, current, operator);
    
    setHistory(`${prevValue} ${operator} ${current} =`);
    setCurrentValue(String(result));
    setPrevValue(null);
    setOperator(null);
    setIsNewInput(true);
  };

  const handleClear = () => {
    setCurrentValue('0');
    setPrevValue(null);
    setOperator(null);
    setHistory('');
    setIsNewInput(true);
  };

  const handleToggleSign = () => {
    setCurrentValue(String(parseFloat(currentValue) * -1));
  };

  const handlePercent = () => {
    setCurrentValue(String(parseFloat(currentValue) / 100));
  };

  const handleDecimal = () => {
    if (!currentValue.includes('.')) {
      setCurrentValue(currentValue + '.');
      setIsNewInput(false);
    }
  };

  return (
    <div className="glass-card calculator animate-fade-in">
      <Display value={currentValue} history={history} />
      
      <div className="button-grid">
        <CalculatorButton label="C" onClick={handleClear} type="action" />
        <CalculatorButton label="±" onClick={handleToggleSign} type="action" />
        <CalculatorButton label="%" onClick={handlePercent} type="action" />
        <CalculatorButton label="÷" onClick={handleOperator} type="operator" />
        
        <CalculatorButton label="7" onClick={handleNumber} />
        <CalculatorButton label="8" onClick={handleNumber} />
        <CalculatorButton label="9" onClick={handleNumber} />
        <CalculatorButton label="×" onClick={handleOperator} type="operator" />
        
        <CalculatorButton label="4" onClick={handleNumber} />
        <CalculatorButton label="5" onClick={handleNumber} />
        <CalculatorButton label="6" onClick={handleNumber} />
        <CalculatorButton label="-" onClick={handleOperator} type="operator" />
        
        <CalculatorButton label="1" onClick={handleNumber} />
        <CalculatorButton label="2" onClick={handleNumber} />
        <CalculatorButton label="3" onClick={handleNumber} />
        <CalculatorButton label="+" onClick={handleOperator} type="operator" />
        
        <CalculatorButton label="0" onClick={handleNumber} doubleWidth={true} />
        <CalculatorButton label="." onClick={handleDecimal} />
        <CalculatorButton label="=" onClick={handleEqual} type="operator" />
      </div>
    </div>
  );
}

export default App;
