import React from "react";
import { useGlobalContext } from "./Context";
const Pagenation=()=>{
  const {page,nbPages,prevpage,nextpage}=useGlobalContext();
  return(
    <>
    <div className="pagination-btn">
   <button onClick={()=> prevpage()}>PREV</button>
    <p className="pag">
    {page+1} of {nbPages}
    </p>
    <button onClick={()=> nextpage()}>NEXT</button>
</div>
    </>
    )
};

export default Pagenation;