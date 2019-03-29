import React, {Component} from 'react';
import './App.css';

// IMPORTING COMPONENTS
// import Description from './Components/Description';
import Footer from './Components/Footer';

class App extends Component {
    render() {
	return (
	<div className="container-main">
		<div className="header">
		    <h1 className="heading-text">Phoenix College ASCEND!</h1>
			<h2 className="heading-text">A High-Altitude Ballooning (HAB) Project</h2>
 	       <img className="the-logo" src="https://i.ibb.co/sR0QsmL/Bear.png"></img>
		</div>
		<Link/>
		<Description/>
		<Footer/>
	</div>
	)};

}
class Description extends Component {
	render() {
		return(
			<div className="container">

				<h2 className="heading-text">Description</h2>
				<p>ASCEND! is a high altitude balloon project funded by NASA. The purpose of the project is to give students the opportunity to learn and apply principles of engineering on a project. It requires teamwork to achieve the goal of creating a housing and a payload, (and in our case a ground station) that is reliable and tested, all while meeting the time and fiscal requirements of the project.</p>
				<p>The team:</p>
				<ul>{listTeamMembers}</ul>
			</div>
		)
	}
}

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

const teamMembers = [
    'Eunice Lopez',
    'Jess Frantz',
    'Chris Yurgel',
	'Modest Juarez',
	'Brian Moreno',
	'Isai Uriarte',
	'Jackie Salazar',
	'Ivan Martinez',
	'Ernest Villacana - Faculty Mentor'
];

const listTeamMembers = teamMembers.map((teamMember) => <li>{teamMember}</li>);



export default App;
