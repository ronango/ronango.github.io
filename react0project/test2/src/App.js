import './App.css';
import config from './config/index.json';
import Header from './components/Header/Header';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Reviews from './components/Reviews/Reviews';

function App() {
  const { links, aboutText, works, reviews } = config;
  return (
    <div className='app'>
      <Header links={links}/>
      <About aboutText={aboutText}/>
      <Portfolio works={works} />
      <Reviews reviews={reviews} />
    </div>
  );
}

export default App;
