import './css/App.css';
import Navbar from './components/Navbar';
// import Banner from './components/Banner';
// import Contents from './components/Contents';
import Footer from './components/Footer';
//import DisciplinasContent from './components/Contents/DisciplinasContent';
import RelatoriosContent from './components/Contents/RelatoriosContent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RelatoriosContent />
      <Footer />
    </div>
  );
}

export default App;
