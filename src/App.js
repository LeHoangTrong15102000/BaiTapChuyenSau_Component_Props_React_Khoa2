import logo from "./logo.svg";
import "./App.css";
import MultiComponent from "./React _Multi_Component/MultiComponent";
import Props from "./Props/Props";
import ProductList from "./ProductList/ProductList";
import dataJson from "./Data/data.json";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          {/* bên trái sẽ là chứa menu 
          Bootstrap khi chia như vậy thì cái độ rộng của nó sẽ dài theo cái nội dung -> nên muốn nó xuống giữa được thì phải sét chiều dài tương đối cho nó
          */}
          <div
            className="nav flex-column nav-pills justify-content-center"
            style={{ minHeight: "800px" }}
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link active"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Home
            </a>
            <a
              className="nav-link"
              id="v-pills-shop-tab"
              data-toggle="pill"
              href="#shop"
              role="tab"
              aria-controls="shop"
              aria-selected="false"
            >
              Shop
            </a>           
          </div>
        </div>
        
        {/* Lớp nội dụng của navs-tab
        
          shop - của chúng ta sẽ là những đôi giầy
          Ở video sẽ hướng dẫn dụng cái productList của Component product
         */}
        <div className="col-8 productList">        
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <ProductList arrProduct={dataJson} />
            </div>
            <div
              className="tab-pane fade"
              id="shop"
              role="tabpanel"
              aria-labelledby="v-pills-shop-tab"
            >
              Hello Le Hoang Trong
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
