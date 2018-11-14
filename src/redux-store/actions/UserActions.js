import axios from 'axios';
export const getUsers=()=>{
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            ({data})=>{
                dispatch({type:'GET_USERS',users:data});
            }
        )
    }
}