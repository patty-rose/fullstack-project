import logo from './logo.svg';
import './App.css';
import CentralContent from './components/CentralContent';
import Header from './components/Header';
import Footer from './components/Footer';

//very minimal css styling added as it was not in the project instructions

function App() {
  return (
    <div className="App">
      <Header />
      <CentralContent />
      <Footer />
    </div>
  );
}

export default App;
