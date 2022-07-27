import './App.css';
import Features from './features.component';
import Hero from './hero.component';
import Navbar from './nav.component';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Features/>
      <header className="App-header">
        <h1 className='text-5xl'>Hello World</h1>
      </header>
    </div>
  );
}

export default App;
