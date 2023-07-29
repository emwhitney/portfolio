import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import More from "./Pages/More";
import Read from "./Pages/Read";
import Photo from "./Pages/Photo";
import Recipes from "./Pages/Recipes";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  const items = [
    { id: 1, name: "Home" },
    { id: 2, name: "Read" },
    { id: 3, name: "Photo" },
    { id: 4, name: "Recipes" },
    { id: 5, name: "More" },
  ];
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="App">
      <div>
        <Header
          items={items}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <div className='outerContainer'>
          {activeItem === 1 && <Home />}
          {activeItem === 2 && <Read />}
          {activeItem === 3 && <Photo />}
          {activeItem === 4 && <Recipes />}
          {activeItem === 5 && <More />}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
