import React from 'react';
import  {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class ListUsers extends React.Component{
    renderUser(user){
        return (
        <li key={user.id}>
            <span>
                {user.name} as 
                <h3>
                    <Link to={`/users/${user.id}`}>{user.username}</Link>
                </h3>
            </span>
        </li>);
    }
    render(){
        let users = this.props.users.map(this.renderUser);
        return(
            this.props.users.length>0?
            (
                <ul>
                    {users}
                </ul>
            ):
            (
                <div>
                    There is no users :(
                </div>
            )
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        users:state.rUsers.users
    }
}
export default connect(mapStateToProps)(ListUsers);