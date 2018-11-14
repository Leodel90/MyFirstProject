import React from 'react';
import {connect} from 'react-redux';
import ListComments from '../Comment Components/ListComments';
import AddComment from '../Comment Components/AddComent';
import {deletePost} from '../../redux-store/actions/PostActions';

class Post extends React.Component{
    state={
        areCommentsLoaded:false,
        isCommentAdderLoaded:false
    }
    handleDelete=(e)=>{
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
        e.preventDefault();
    }
    handleLoaderComments=(e)=>{
        this.setState({areCommentsLoaded:true});
        e.preventDefault();
    }
    render(){
        return (
            <div>
                <h2>
                    {this.props.post.title}
                </h2>
                <p>
                    {this.props.post.body}
                </p>
                <h4>
                    by {this.props.post.userId}
                </h4>
                <button onClick={this.handleDelete}>Delete post</button>
                <AddComment id={this.props.post.id}/>
                {this.state.areCommentsLoaded?(<ListComments id={this.props.post.id}/>):
                (<button onClick ={this.handleLoaderComments}>Load comments</button>)}
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    let id = Number(ownProps.match.params.post_id);
    return{
        post:state.rPosts.posts.find( (post)=>post.id===id )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        deletePost:(id)=>dispatch( deletePost(id) )
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Post);

