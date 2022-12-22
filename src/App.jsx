
import { Routes, Route, Navigate} from 'react-router-dom';

// telas
import { Home } from './pages/Home/Home';
import { Keys } from './pages/Keys/Keys';
import { Login } from './pages/Login/Login';
import { Matches } from './pages/Matches/Matches';
import { Register } from './pages/Register/Register';
import { Subscribe } from './pages/Subscribe/Subscribe';
import { Error404 } from './pages/page404/error404.jsx'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/keys" element={<Keys />} />
        <Route path="/login" element={<Login />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/register" element={<Register />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="*" element={<Error404 />}/>
      </Routes>
  )
}

export default App
