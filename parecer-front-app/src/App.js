import './css/App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Contents from './components/Contents';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Contents content="HomeContent" />
      <Footer />
    </div>
  );
}

export default App;
