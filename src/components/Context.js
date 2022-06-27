import React, {useContext, useReducer,useEffect} from "react";
import reducer from "./reducer"

let myapi = "https://hn.algolia.com/api/v1/search?";

const initialstate = {
  isloading: true,
  query: "javascript",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppContext = React.createContext();

const AppProvider = ({children})=> {
  const [state,dispatch] = useReducer(reducer, initialstate)


  const fetchdta = async (url) => {

    dispatch({
      type: "set_loading"
    })

    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        }
      });

    }catch(error) {
      console.log(error)
    }
  }

  //remove post
  const removepost = (postid)=> {
    dispatch({
      type: "remove_post", payload: postid
    });
  }
  //search

  const searchpost = (searchquery)=> {
    dispatch({
      type: "search_query", kk: searchquery
    })
  }

  //page
  const nextpage = ()=> {
    dispatch({
      type: "next"
    })
  }

  const prevpage = ()=> {
    dispatch({
      type: "prev"
    })
  }

  useEffect(() => {
    
    fetchdta(`${myapi}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

    
  return (
    < AppContext.Provider value = {{...state, removepost, searchpost, nextpage,prevpage}} >
    {children} 
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext,AppProvider,useGlobalContext};