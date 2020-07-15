import React, { Component } from 'react'

export default class Post extends Component {
  render(props) {
    return (
      <div>
        <li>
          id = {this.props.id}
          <br />
          {this.props.body}
          <br />
          <button onClick={this.props.delete}>Delete</button>
          <hr />
        </li>
      </div>
    );
  }
}
