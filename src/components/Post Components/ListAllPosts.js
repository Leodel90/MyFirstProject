import React from 'react';
import {connect} from 'react-redux';
import ListPost from './ListPosts';
import {getPosts} from '../../redux-store/actions/PostActions';

class ListAllPost extends React.Component{
    componentDidMount(){
        this.props.getPosts(post=>true);
    }
    render(){
        return(
            <div>
                <ListPost posts={this.props.posts} path={this.props.match.path}/>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        posts:state.rPosts.posts
    }
}
const mapDispatchToProp=(dispatch)=>{
    return {
        getPosts:(condition)=>{
            dispatch(getPosts(condition))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProp)(ListAllPost);