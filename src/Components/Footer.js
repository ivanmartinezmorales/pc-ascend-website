import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render () {
        return (
            <div className="footer-container">
                <p style={{textAlign: "center"}}>This website was created with React.</p>
                
                <p style={{textAlign: "center", paddingTop: "2rem"}}>Special Thanks to:</p>
                <p> Mr. Ernest Villicana | Dr. Ed Ong | Mr. Adam Jimenez | ANSR | Arizona Space Grant Consortium</p>


            </div>
        );
    };
};

export default Footer;