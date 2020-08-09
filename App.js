import React, {useState, useEffect}from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Navbar from "./components/Navbar";

function App() {
  const [search, setSearch]= useState("chiken");
  const [recipes,setRecipes]= useState([]);

  const App_Id="138db864";
  const App_Key="74529be4375683d18769adad7330c2a3";

  useEffect(()=>{
    getRecipes()
  },[]);

  const getRecipes=async ()=>{
    const res= await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${App_Id}&app_key=${App_Key}`);

    setRecipes(res.data.hits);
  };
  
  const onInputChange= e =>{
      setSearch(e.target.value);
  };
  return (
    <div className="App">
    <Navbar />
    <Header search={search} onInputChange={onInputChange} />
    <div className="container">
    <Recipes recipes={recipes}/>
    </div>
    
    </div>
  );
};

export default App;
