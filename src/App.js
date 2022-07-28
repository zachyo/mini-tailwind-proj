import './App.css';
import Features from './features.component';
import Footer from './footer.component';
import Hero from './hero.component';
import Navbar from './nav.component';
import Testimonials from './testimonials.component';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
