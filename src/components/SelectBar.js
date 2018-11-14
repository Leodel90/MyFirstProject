import React from 'react';
import {Link} from 'react-router-dom'
const SelectBar =()=>{
        return(
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/users'>users</Link>               
            </nav>
        )    
}
export default SelectBar;