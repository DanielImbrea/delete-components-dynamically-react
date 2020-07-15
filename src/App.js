import React, { Component } from 'react'
import Post from './components/Post'
export default class App extends Component {

  state = {
    postArray : [
      {id: 1, body: 'da da da da da'},
      {id: 2, body: 'nununununu'},
      {id: 3, body: 'danu danu danu danu dan'}
    ]
  }

deleteEvent = (index) => {
const copyPostArray = Object.assign([], this.state.postArray);
copyPostArray.splice(index,1);
this.setState({
  postArray : copyPostArray
})
}

  render() {
    return (
      <div>
        <ul>
          {
           this.state.postArray.map((post,index)=> {
             return (
               <Post 
               key = {post.id}
                id={post.id}
                body={post.body}
                delete={this.deleteEvent.bind(this,index)}
               />
             )
           })
          }
        </ul>
      </div>
    )
  }
}
