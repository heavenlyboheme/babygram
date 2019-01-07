import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


function Babygram(props) {
    return  <div>
        <Link className='addIcon'onClick={props.onNavigate} to="/AddPhoto"></Link>
    <div className= "photo-grid">
            {props.posts
            .sort(function(x,y) {
                return y.id-x.id
            })
            .map((post, index) => <Photo key= {index} post = {post} onRemovePhoto={props.onRemovePhoto}/>)}
</div>
</div>
}

Babygram.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto:PropTypes.func.isRequired
}

// class Babygram extends Component {
//     render()  {
//         return <div className= "photo-grid">
//         {this.props.posts.map((post, index) => <Photo key= {index} post = {post} onRemovePhoto={props.onRemovePhoto}/>)}

//         </div>
//    }
//}
export default Babygram