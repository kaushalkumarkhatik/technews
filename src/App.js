import React from "react";
import Search from "./components/Search";
import Pagenation from "./components/Pagenation";
import Stories from "./components/Stories";
import Form from "./components/Form";
import "./App.css"
import Footer from "./components/Footer";
import "./App.css"

const App=()=>{
  return(
    <>
    <Search />
    <Pagenation />
    <Stories />
    <Form />
    <Footer />
    </>
    )
};

export default App;