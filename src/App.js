import './App.css';
import Navbar from './components/navbar/Navbar';
import ProductPage from './components/ProductPage/ProductPage';
import ProductSummary from './components/ProductSummary/ProductSummary';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div style={{display: 'flex'}}>
        <ProductPage/> <ProductSummary />
        </div>
      
       
    </div>
  );
}

export default App;
