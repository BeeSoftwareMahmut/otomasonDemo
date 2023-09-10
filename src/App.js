import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Hero from "./Components/Hero/Hero";
import Header from "./Components/Layout/Header";
import Products from "./Components/Products/Products";



function App() {

  const [cartIsVisible, setCartIsVisible] = useState(false);
 
 

  const hideCartInfo = (e) => {
    e.preventDefault();
    setCartIsVisible(false)

  }

 

  return (
  
    <div className="h-screen w-screen ">
      
       <Header setCartIsVisible={setCartIsVisible} />
       
      <div onClick={()=>setCartIsVisible(false)} className={` ${cartIsVisible ? "opacity-30" : ""}`}>
     
      <Hero />
      <Products />
      </div>
      <div>
      {cartIsVisible ? (<Cart hideCartInfo={hideCartInfo} />) : ""}
      </div>
      </div>
  
  );
}

export default App;
