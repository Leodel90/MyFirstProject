import React from 'react';
import {connect} from 'react-redux';
import ListPost from './ListPosts';

class ListPostByUser extends React.Component{
    render(){
        return(
            <div>
                <ListPost posts={this.props.posts}/>
            </div>
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
    return{
        posts:state.posts.filter(post=>post.id===ownProps.match.params.user_id)
    }
}
export default connect(mapStateToProps)(ListPostByUser);