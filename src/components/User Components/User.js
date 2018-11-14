import React from 'react';
import {connect} from 'react-redux';
import ListPosts from '../Post Components/ListPosts';
import CreatePost from '../Post Components/CreatePost';
import {getPosts} from '../../redux-store/actions/PostActions';

class User extends React.Component{
    componentDidMount(){
        this.props.getPosts(post=>post.userId === this.props.user.id);
    }
    render(){
        return (
            <div>
                <h3>
                    {this.props.user.username}
                </h3>
                <h4>{this.props.user.name}</h4>
                <CreatePost userId={this.props.user.id}/>
                <h4>{this.props.user.name}'s posts</h4>
                <ListPosts posts={this.props.posts} path={"/posts"}/>
            </div>
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
    let id=Number(ownProps.match.params.user_id);
    return {
        user:state.rUsers.users.find(user=>user.id===id),
        posts:state.rPosts.posts.filter(post=>post.userId===id)
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getPosts:(condition)=>{
            dispatch(getPosts(condition));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(User);
