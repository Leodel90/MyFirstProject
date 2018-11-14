const init={
    comments:[
        {
            postId: 1,
            id: 1,
            name: "I am a comment",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
          },
          {
            postId: 2,
            id: 1,
            name: "comment!!",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
          },
          {
            postId: 1,
            id: 2,
            name: "kyc",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
          }
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
        default:break;
    }
    return state;
}

export default reducerComments;