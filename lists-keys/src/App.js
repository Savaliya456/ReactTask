import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import EventHandling from './EventHandling';

function App() {

  const products = [
    {id : "1"},
    {image : "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1888ad40/images/Titan/Catalog/1805QM01_1.jpg?sw=360&sh=360"},
    {title : "Titan Neo Splash Blue Dial Quartz Multifunction Stainless Steel Strap watch for Men"} ,
    {categories : "Men's watch"},
    {price : "₹ 6,995"}
  ]


  return (
    <div className="App">
      <EventHandling products={products}/>
    </div>
  );
}

export default App;
