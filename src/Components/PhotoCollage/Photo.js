/**
 * This is the Photo.js file, used to represent the Photo component that will 
 * create a photo 
 */

import React, { Component } from 'react';

class Photo extends Component {
  
  render() {
    return (
      <div className='photo'>
        <img src={this.props.photo} 
        style={{maxHeight: "225px", 
                paddingLeft: "0.25em", 
                paddingRight:"0.25em", 
                paddingBottom: "0.5em", 
                paddingTop: "0.5em"
               }}alt={this.props.alt}/>
        {/* <p style={{paddingTop: "0.25em", paddingLeft: "0.5em"}}>{this.props.caption}</p> */}
      </div>
    )
  }
}

export default Photo;