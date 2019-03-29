import React, {Component} from 'react';
import './App.css';

// IMPORTING COMPONENTS
// import Description from './Components/Description';
import Link from './Components/Link';
import Logo from './Components/Logo';
import Footer from './Components/Footer';

class App extends Component {
    render() {
	return (
	<div className="container">
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

				<h2>Description</h2>
				<p>ASCEND! is a high altitude balloon project funded by NASA. The purpose of the project is to give students the opportunity to learn and apply principles of engineering on a project. It requires teamwork to achieve the goal of creating a housing and a payload, (and in our case a ground station) that is reliable and tested, all while meeting the time and fiscal requirements of the project.</p>
				<ul>{listTeamMembers}</ul>
			</div>
		)
	}
}

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
