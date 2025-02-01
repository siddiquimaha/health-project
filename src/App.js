
import './App.css';
import Benefit from './components/Benefit';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Header from './components/Header';
import Tittle from './components/Tittle';
import Work from './components/Work';
import Formula from './components/Formula';
import Oneformula from './components/Oneformula';
import Products from './components/Products';
import Contact from './components/Contact';

function App() {

  return (
    <div className="App">
      <Header/>
      <Tittle/>
      <Counter/>
      <Work/>
      <Benefit/>
      <Formula/>
      <Oneformula/>
      <Products/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
