/**
 * This is the Photo.js file, used to represent the Photo component that will 
 * create a photo 
 */

import React, { Component } from 'react';

class Photo extends Component {
  
  render() {
    return (
      <div className='photo'>
        <img src={this.props.photo} alt={this.props.alt}/>
        <p>{this.props.caption}</p>
      </div>
    )
  }
}

export default Photo;