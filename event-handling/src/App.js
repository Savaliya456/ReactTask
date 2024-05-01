import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import EventHandling from './EventHandling';

function App() {

  const products = [
    {
      id: "1",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1888ad40/images/Titan/Catalog/1805QM01_1.jpg?sw=360&sh=360",
      title: "Titan Neo Splash Blue Dial Quartz Multifunction Stainless Steel Strap for Men",
      categories: "Men's watch",
      price: "₹ 6,995",
    },
    {
      id: "2",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2f782c9e/images/Titan/Catalog/1829NM02_1.jpg?sw=360&sh=360",
      title: "Titan Quartz Multifunction Black Dial Stainless Steel Strap Watch For Men",
      categories: "Men's Watch",
      price: "₹ 15,545"
    },
    {
      id: "3",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw0814ec34/images/Titan/Catalog/1805QM04_1.jpg?sw=360&sh=360",
      title: "Titan Neo Splash Quartz Multifunction Black Dial Stainless Steel Strap Watch for Men",
      categories: "Men's Watch",
      price: " ₹ 6,345.00"
    },
    {
      id: "4",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw4743ffe5/images/Titan/Catalog/1828KM02_1.jpg?sw=360&sh=360",
      title: "Titan Grandmaster Brown Dial Analog Stainless Steel Strap Watch For Men",
      categories: "Men's Watch",
      price: "₹ 10,045"
    },
    {
      id: "5",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw6c9df22a/images/Titan/Catalog/2656WM01_1.jpg?sw=360&sh=360",
      title: "Titan Women's Lagan Watch: Rose Gold Accents & Refined Elegance",
      categories: "Women's Watch",
      price: "₹ 2,725"
    },
    {
      id: "6",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwc25dda89/images/Titan/Catalog/95198WM01_1.jpg?sw=360&sh=360",
      title: "Titan Raga Delight Purple Dial Analog Metal Strap Watch For Women",
      categories: "Women's Watch",
      price: "₹ 14,995"
    },
    {
      id: "7",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw78567e2c/images/Titan/Catalog/95201WM01_1.jpg?sw=360&sh=360",
      title: "Titan Raga Delight Mother Of Pearl Dial Analog Metal Strap Watch For Women",
      categories: "Women's Watch",
      price: "₹ 8,095"
    },
    {
      id: "8",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw89722b0f/images/Titan/Catalog/95155KM01_1.jpg?sw=360&sh=360",
      title: "Titan Raga Delight Rose Gold Dial Women Watch With Stainless Steel Strap",
      categories: "Women's Watch",
      price: "₹ 12,495"
    },
    {
      id: "9",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwee3ff5e3/images/Helios/Catalog/CO14503264W_1.jpg?sw=360&sh=360",
      title: "Coach Watch for Women",
      categories: "Women's Watch",
      price: "₹ 24,500.00"
    },
    {
      id: "10",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw9d6d977f/images/Helios/Catalog/PLPEWGE0022701W_1.jpg?sw=360&sh=360",
      title: "Police X Batman Automatic Black Dial Leather Strap Watch for Men",
      categories: "Men's Watch",
      price: " ₹ 33,250.00"
    },
    {
      id: "11",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3e0dd26a/images/Helios/Catalog/TH1782391_1.jpg?sw=360&sh=360",
      title: "Tommy Hilfiger Quartz Multifunction Pink Dial Stainless Steel Strap Watch for Women",
      categories: "Women's Watch",
      price: "₹ 16,495"
    },
    {
      id: "12",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw70324dcb/images/Helios/Catalog/TH1710519_1.jpg?sw=360&sh=360",
      title: "Tommy Hilfiger Grey Dial Stainless Steel Strap Watch For Men",
      categories: "Men's Watch",
      price: "₹ 12,950"
    }


  ]


  return (
    <div className="App">
      <EventHandling products={products} />
    </div>
  );
}

export default App;