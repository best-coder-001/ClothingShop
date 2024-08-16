import {Routes,Route} from 'react-router-dom'

import HomeView from "./pages/HomeView"
import SignInView from "./pages/SignInView"
import SignupView from "./pages/SignupView"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<HomeView />}></Route>
      <Route path="/sign-in" element={<SignInView />}></Route>
      <Route path="/signup" element={<SignupView />}></Route>
    </Routes>
  )
}

export default App
