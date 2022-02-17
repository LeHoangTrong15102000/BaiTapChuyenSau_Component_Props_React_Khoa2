import logo from './logo.svg';
import './App.css';
import MultiComponent from './React _Multi_Component/MultiComponent';
import Props from './Props/Props';
import ProductList from './ProductList/ProductList';
import dataJson from './Data/data.json';

function App() {
  return (
    <div className="App">
      {/* <MultiComponent /> */}

      {/* <Props  /> */}

      <ProductList arrProduct={dataJson} />
    </div>
  );
}

export default App;
