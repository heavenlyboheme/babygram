import React, {Component} from 'react'
import Title from './Title'
import Babygram from './Babygram'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
    

class Main extends Component {
    constructor() {
        super()
        this.state= {
            posts: [{
                id:0,
            description: "cutie pie",
            imageLink: "http://www.heavenlyboheme.com/hbimages/baby1.jpg"
        }, {
            id: 1,
            description: "so precious",
            imageLink: "http://www.heavenlyboheme.com/hbimages/baby2.jpg"
        }, {
            id: 2,
            description: "make me smile",
            imageLink: "http://www.heavenlyboheme.com/hbimages/baby3.jpg"
        }, {
            id: 3,
            description: "Noooo... I wasn't ready!",
            imageLink: "http://www.heavenlyboheme.com/hbimages/baby4.jpg"
        }, {
            id: 4,
            description: "time for smell good",
            imageLink: "http://www.heavenlyboheme.com/hbimages/cute_baby_bath.jpg"
        }, {
            id: 5,
            description: "shhhh... be quiet",
            imageLink: "http://www.heavenlyboheme.com/hbimages/cute_baby_sleep.jpg"
        }, {
            id: 6,
            description: "just getting some sun",
            imageLink: "http://www.heavenlyboheme.com/hbimages/cute_asian_baby.jpg"
        }, {
            id: 7,
            description: "Mommy, I hungry!",
            imageLink: "http://www.heavenlyboheme.com/hbimages/mom_baby.jpg"
        }, {
            id: 8,
            description: "teddy is behind me, isn't he?",
            imageLink: "http://www.heavenlyboheme.com/hbimages/cute_baby_teddy_bear.jpg"
       
        }]

        }
        this.removePhoto = this.removePhoto.bind(this)

    }

removePhoto(postRemoved){
    console.log(postRemoved.description)
    this.setState((state) =>({
        posts: state.posts.filter(post => post !== postRemoved)
}))
}

addPhoto(postSubmitted) {
    this.setState(state =>({
        posts: state.posts.concat([postSubmitted])
    }))
}

// componentDidMount() {
 
// }

    render()  {
        return (
        <div>
           
           <Route exact path = "/" render={() =>(
            <div>  
            <Title title={'Babygram'}/>
            <Babygram posts ={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate}/>
                
            </div>
           )}/>
           
           <Route path = "/AddPhoto" render = {({history}) => (
               <AddPhoto onAddPhoto= {(addedPost) => {
                    this.addPhoto(addedPost)
                    history.push('/')
               }}/>
           )}/>
       
         </div> 
        )
        
    }
}

export default Main