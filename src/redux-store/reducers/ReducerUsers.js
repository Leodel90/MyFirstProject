const init={
    users:[]
}

const reducerUsers =(state = init ,action)=>{
    switch (action.type){
        case 'DELETE_USER':
            state= {
                ...state,
                users:state.users.filter(user=>user.id!==action.id)
            }
        break;
        case 'ADD_USER':
            state= {
                ...state,
                user:[...state.users,action.user]
            }
        break;
        case 'GET_USERS':
            state= {
                ...state,
                users:action.users
            }
        break;
        
        default:break;
    }
    return state;
}

export default reducerUsers;