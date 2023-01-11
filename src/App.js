import React, { useState } from 'react'
import './App.css';
import logo from './images/myntra-logo.png'
import List from './components/List/List';
import Login from './components/Login/Login';

export const UserContext = React.createContext()

function App() {
  const [userData, setUserData] = useState(null)
  return (
      <div className="App">
        {!userData ? <Login setUserData={setUserData} /> :
          <><header>
            <img src={logo} alt="img" />
            <div className="right-header">
              <label className="switch">
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
