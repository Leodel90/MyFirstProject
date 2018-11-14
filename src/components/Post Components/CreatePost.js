import React from 'react';
import {connect} from 'react-redux';
import {createPost} from '../../redux-store/actions/PostActions';
class CreatePost extends React.Component{
    state={
        title:"",
        body:""
    }
    handleSubmit=(e)=>{
        console.log(this.state,this.props.userId)
        this.props.createPost(
            Object.assign(
                {
                    userId:this.props.userId
                },
                this.state
            )
        )
        e.preventDefault();
    }
    handleChange=(e)=>{
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        )
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Create a post!</h3>
                <label>Title</label><input type='text' onChange={this.handleChange} name='title'></input>
                <label>Body</label><input type='text' onChange={this.handleChange} name='body'></input>
                <button>Done</button>
            </form>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        createPost:(post)=>{
            dispatch(createPost(post));
        }
    }
}

export default connect(null,mapDispatchToProps)(CreatePost);