import axios from 'axios';

export  const createPost=(post)=>{
    return async (dispatch,getState)=>{
        dispatch({type:'CREATE_POST',post:post});
    }
}

export  const deletePost=(id)=>{
    return (dispatch,getState)=>{
        
        dispatch({type:'DELETE_POST',id:id});
    }
}

export const getPosts=(condition)=>{
    return (dispatch,getState)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            ({data})=>{
                dispatch({type:'GET_POSTS', condition:condition,posts:data })
            }
        )
    }
}