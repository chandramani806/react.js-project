import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import './components/Navbar.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    return ( 
      <>
        <Navbar/>
        <Cards/>
      </>
    );
}

export default App;