import React from 'react';
import {connect} from 'react-redux';
class ListComments extends React.Component{
    handleDelete=(id)=>{
        this.props.deleteComment(id)
    }

    renderComment=(comment)=>{
        return (
            <li key={comment.id}>
                <h4>{comment.name}</h4>
                <h6>by {comment.email}</h6>
                <h5>{comment.body}</h5>
                <button onClick ={()=>this.handleDelete(comment.id)}>Delete comment</button>
            </li>
        );
    }
    render(){
        let commentsDOM=this.props.comments.map(
            comment=>this.renderComment(comment)
        );
        return commentsDOM.length>0?(
            <ul>
                {commentsDOM}
            </ul>
        ):(<p>There are not comments</p>)
    }
}
const mapStateToProps=(state,ownProps)=>{
    let post_id=ownProps.id;
    return{
        comments:state.rComments.comments.filter(comment=>comment.postId===post_id)
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        deleteComment:(id)=>{
            dispatch({type:"DELETE_COMMENT",id:id})
        },
        addComment:(comment)=>{
            dispatch({type:"ADD_COMMENT",comment:comment})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListComments);

