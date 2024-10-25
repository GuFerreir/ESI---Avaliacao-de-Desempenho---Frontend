import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Contents from '../components/Contents';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Contents content="HomeContent" />
      <Footer />
    </div>
  );
}

export default Home;
