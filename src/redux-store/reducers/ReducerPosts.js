const init={
    posts:[]
}

const reducerPosts = (state = init ,action)=>{
    switch(action.type){
     case 'DELETE_POST':
        state={
            ...state,
            posts:state.posts.filter(post=>post.id!==action.id)
        }
    break;
    case 'CREATE_POST':
        action.post.id=state.posts.reduce(
            (a,{id})=>
                id>a? id : a
            ,0    
        )+1;
        state= {
            ...state,
            posts:[...state.posts,action.post]
        }
    break;
    case 'GET_POSTS':
        state= {
            ...state,
            posts:action.posts.filter(action.condition)
        }
    break;
        default:break;
    }
    return state;
}

export default reducerPosts;