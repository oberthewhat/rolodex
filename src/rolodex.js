import React from "react";
import './style.css';

class PersonCard extends React.Component {
	constructor(props) {
		super(props)
	}
	
}

class Rolodex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			people: [],
		}
	}

	componentDidMount() {
    fetch("https://randomuser.me/api?results=25")
    .then(response => response.json())
    .then(d => this.setState({ people: d }))

  }

	render() {
		console.log(this.state.people.results)
		return(
			
			<div><h1>Hello</h1></div>
		)
	}


}


export default Rolodex