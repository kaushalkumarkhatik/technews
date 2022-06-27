import React from "react";
import { useGlobalContext } from "./Context";


const Search=()=>{
  const { query,searchpost } = useGlobalContext();
  return(
    <>
    <div>
    
    <h1><img src="images/logo.png" alt="Logo" />Tech News</h1>
    <form>
    <div>
 
    <input type="text" className="srch" placeholder="Search here" 
    value={query}
    onChange={(e) => searchpost(e.target.value)}
    />
      
    </div>
    </form>
    </div>
    </>
    )
};

export default Search;