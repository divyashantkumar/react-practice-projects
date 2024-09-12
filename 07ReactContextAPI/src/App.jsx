

import './App.css'
import Login from './components/login/Login'
import Profile from './components/profile/Profile'
import UserContextProvider from './context/userContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>React and Context API for centralized and global statem management.</h1>
      <Login/>
      <Profile />
    </UserContextProvider>
  )
}

export default App
