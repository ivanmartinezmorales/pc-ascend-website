import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render () {
        return (
            <div className="footer-container">
                <p>This website was created with React.</p>
                
                <p>Special Thanks to: Mr. Ernest Villacana | Mr. Adam Jimenez | ANSR | Arizona Space Grant Consortium</p>
            </div>
        );
    };
};

export default Footer;