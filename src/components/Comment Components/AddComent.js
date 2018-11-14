import React from 'react';
import {connect} from 'react-redux';
import {addComment} from '../../redux-store/actions/CommentActions';

class AddComment extends React.Component{
    state={
        name:"",
        email:"",
        body:""
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addComment(
            Object.assign({
                postId:this.props.id
            },this.state)
        );
    }
    handleChange=(e)=>{
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        );
    }
    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <h4>Write a comment:</h4>
            <label>Name: </label><input type="text" name="name" onChange={this.handleChange}/>
            <label>Email: </label><input type="text" name="email" onChange={this.handleChange}/>
            <label>Body: </label><input type="text" name="body" onChange={this.handleChange}/>
            <button>Submit</button>
        </form>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        addComment:(comment)=>{
            dispatch(addComment(comment))
        }
    }
}

export default connect(null,mapDispatchToProps)(AddComment);