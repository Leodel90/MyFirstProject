import axios from 'axios';

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

export const getComments=(condition)=>{
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/comments').then(
            ({data})=>{
                dispatch({type:'GET_COMMENTS', comments:data,condition: condition});
            }
        );
    }
}