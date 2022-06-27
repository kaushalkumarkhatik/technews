const reducer = (state, action)=> {

  switch (action.type) {
    case "set_loading":
      return {
        ...state,
        isloading: true,
      }
    case "GET_STORIES":
      return {
        ...state,
        isloading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "remove_post":
      return {
        ...state,
        hits: state.hits.filter(
          (curElem) => curElem.objectID !== action.payload
        ),
      }
    case "search_query":
      return {
        ...state,
        query: action.kk,
      }

    case "next":
      let npage = state.page+1
      if (npage >= state.nbPages) {
        npage = 0;
      }
      return {
        ...state,
        page: npage,
      }
    case "prev":
      let pnum = state.page-1;
      if (pnum <= 0) {
        pnum = 0;
      }
      return {
        ...state,
        page: pnum,
      }
    default:
      console.log("Hello")


  };

  return state;
};
export default reducer;