import React, {Component} from 'react';
import './App.css';

// IMPORTING COMPONENTS
// import Description from './Components/Description';
import Footer from './Components/Footer';
import Video from './Video';

class App extends Component {
    render() {
	return (
	<div className="container-main">
		<div className="header">
		<img className="the-logo" src="https://i.ibb.co/sR0QsmL/Bear.png" style={{height: "112px", float: "left", paddingRight: "1em"}}></img>
		    <h1 className="heading-text" style={{fontSize: "2.5em", marginBottom: "0em", paddingBottom: "0em", textAlign: "right"}}>Phoenix College ASCEND!</h1>
			<h2 className="heading-text" style={{fontSize: "1.25em", marginTop: "0em", textAlign: "right"}}>🎈&nbsp;A High-Altitude Ballooning (HAB) Project</h2>
		</div>
		<Video/>
		<Description/>
		<Footer/>
	</div>
	)};

}
class Description extends Component {
	render() {
		return(
			<div className="container-main">
				<h2 className="heading-text">Description</h2>
				<p className="body-text">ASCEND! is a high altitude balloon project funded by NASA. The purpose of the project is to give students the opportunity to learn and apply principles of engineering on a project. It requires teamwork to achieve the goal of creating a housing and a payload, (and in our case a ground station) that is reliable and tested, all while meeting the time and fiscal requirements of the project.</p>
				<p className="body-text" style={{textDecoration: "underline"}}>The Spring 2019 Team:</p>
				<ul className="body-text">{listTeamMembers}</ul>
			</div>
		)
	}
}


const teamMembers = [
    'Eunice Lopez - Team Lead',
    'Jess Frantz',
    'Chris Yurgel',
	'Modest Juarez',
	'Brian Moreno',
	'Isai Uriarte',
	'Jackie Salazar',
	'Ivan Martinez',
];

const listTeamMembers = teamMembers.map((teamMember) => <li>{teamMember}</li>);



export default App;
