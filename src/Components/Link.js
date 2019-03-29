import React, {Component} from 'react';

class Link extends Component {
    render() {
        return (
            <div>
                <h2>Here's the link to our live stream!</h2>
                <h3>Our livestream will be live on March 30th, 2019 at 9 AM EST. </h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dGtF_c5YTZ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        );
    };
};

export default Link;