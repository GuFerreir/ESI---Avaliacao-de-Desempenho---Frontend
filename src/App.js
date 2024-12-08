import './css/App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';
import React, { useContext } from 'react';
import Home from './pages/Home';
import Formulario from './pages/Formulario';
import Perfil from './pages/Perfil';
import Relatorios from './pages/Relatorios';
import Login from './components/Login';
import { UserProvider } from './contexts/UserContext';

function App() {
  const { user } = useContext(UserContext);

  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/relatorios" element={<Relatorios />} />
            <Route
              path="/perfil"
              element={user ? <Perfil /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
