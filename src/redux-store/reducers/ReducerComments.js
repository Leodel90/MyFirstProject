const init={
    comments:[
    ]
}

const reducerComments = (state = init ,action)=>{
    switch (action.type){
        case 'DELETE_COMMENT':
        state= {
            ...state,
            comments:state.comments.filter(comment=>comment.id!==action.id)
        }
        break;
    
        case 'ADD_COMMENT':
            let myPostId=action.comment.postId;
            action.comment.id=state.comments.reduce(
                (a,{postId,id})=>{
                    if(postId===myPostId && id>a) 
                        return id;
                    else return a;
                    },0
                )+1;
            state= {
                ...state,
                comments:[...state.comments,action.comment]
            }
        break;
        case 'GET_COMMENTS':
            state= {
                ...state,
                comments:action.comments.filter(action.condition)
            }
        break;
        
        default:break;
    }
    return state;
}

export default reducerComments;