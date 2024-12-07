import './css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Formulario from './pages/Formulario';
import Perfil from './pages/Perfil';
import Relatorios from './pages/Relatorios';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/relatorios" element={<Relatorios />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
