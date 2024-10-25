import Navbar from '../components/Navbar';
import Contents from '../components/Contents';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

function Formulario() {
  const location = useLocation();
  const { formType, relatorioID } = location.state || {};

  return (
    <div>
      <Navbar />
      <Contents content="Formularios" formType={formType} relatorioID={relatorioID} />
      <Footer />
    </div>
  );
}

export default Formulario;
