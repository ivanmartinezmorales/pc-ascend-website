import React, {Component} from 'react';
import "./Description.css";


class Description extends Component {
    render() {
	return (
	    <div className="container">
	    <h2>Description</h2>
	    <p>ASCEND! is a two semester program which gives students the opportuntiy to learn and apply principles of engineering on a project. It requires teamwork to achieve the goal of creating a housing and a payload that is reliable and tested. All while meeting the time and fiscal requirements of the project.</p>
		<h2>The Team:</h2>
		<ul>{listTeamMembers}</ul>
	</div>
	)
    }
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
	'Ernest Villicana - Faculty Mentor'
];

const listTeamMembers = teamMembers.map((teamMember) => <li>{teamMember}</li>);

export default Description;
