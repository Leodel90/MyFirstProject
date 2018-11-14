import React from 'react';
import {Link} from 'react-router-dom';

const ListPosts = (props)=>{
    let postsDOM=props.posts.map(
        (singlePost)=>{
            return(
                <div key={singlePost.id}>
                    <Link to={`${props.path}/${singlePost.id}`}>
                        <h3>{singlePost.title}</h3>
                    </Link>
                    <br/>
                </div>
            )
        }
    );
    return props.posts!==undefined?
    (
        <div>
            {postsDOM}
        </div>
    ):
    (
        <div>
            Wait...
        </div>
    );
}
export default ListPosts;
