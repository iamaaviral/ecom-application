import React, { useState, createContext, useMemo, useCallback, useEffect } from 'react'
import './App.css';
import logo from './images/myntra-logo.png'
import List from './components/List/List';
import Login from './components/Login/Login';
import Cart from './components/Cart/cart';
import { ThemeContext } from './context/themeContext';
import Portal from './components/Portals/Portal';
import Dummy1 from './components/Cart/Dummy1';

export const UserContext = createContext()


//react optimization
//useMemo ===> one of the ways to optimize react component

function App() {
  const [name, setName] = useState('aviral')
  const [counter, setCounter] = useState(0)

  console.log('App component render')

  const changeCounterFromChild = useCallback(() => {
    setCounter(counter+1)
  }, [counter])
  // const changeCounterFromChild = () => {
  //   setCounter(counter+1)
  // }
  // useEffect(() => {

  // }, [])

  return (
      <div className={`App`}>
        <input onChange={(e) => setName(e.target.value)} value={name}/>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter+1)}>imcrease my counter</button>
        <Cart counter={counter} changeCounter={changeCounterFromChild}/>
      </div> 
  );
}

//this valid only for pure function

// Math.random()


// function abc(a,b) {
//   if(!_cache[`${a}+${b}`]) {
//     let finaValue = a+b
//     result[`${a}+${b}`] = finaValue
//   }
//   const _cache = {'1+2' : 3}

//   return finaValue
// }

// abc(1,2)
// abc(3,4)
// abc(5,7)
// abc(1,2)
// abc(456,789)

// 1 ====> x
// pure function

//what is comromised to achieve what??
// space in trade with time


// function generateNumber(a) {
//   const _cache = {1: 2, 3: 6, 15: 30}
//   setTimeout(() => {
//     return a*2
//   } , 1000)
// }

// generateNumber(1)

export default App;
