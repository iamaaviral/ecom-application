import React, { useState } from 'react'
import './App.css';
import logo from './images/myntra-logo.png'
import List from './components/List/List';
import Login from './components/Login/Login';
import Cart from './components/Cart/cart';
import { ThemeContext } from './context/themeContext';

export const UserContext = React.createContext()

function App() {
  const [userData, setUserData] = useState(null)
  const value = React.useContext(ThemeContext)

  // error boundary
  return (
      <div className={`App ${value.theme}`}>
        {userData ? <Login setUserData={setUserData} /> :
          <><header>
            <img src={logo} alt="img" />
            <div className="right-header">
              <div>
               <Cart />
              </div>
              <label className="switch">
                <input type="checkbox" onChange={value.toggleTheme}/>
                <span className="slider round"></span>
              </label>
              <button href="" className="logout-linkButton" onClick={() => setUserData(null)}>Logout</button>
            </div>
          </header>
            <div className="body-container">
              <UserContext.Provider value={{userData, setUserData}}>
                <List/>
              </UserContext.Provider>
</div>
          </>
        }
      </div> 
  );
}

export default App;
