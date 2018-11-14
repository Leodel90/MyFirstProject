export  const addComment=(comment)=>{
    return (dispatch,getState)=>{
        dispatch({type:'ADD_COMMENT',comment:comment});
    }
}

export  const deleteComment=(id)=>{
    return (dispatch,getState)=>{
        
        dispatch({type:'DELETE_COMMENT',id:id});
    }
}