import React from "react";
import './style.css';
import Details from "./details"


class Rolodex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			people: [],
			button: false
		}

	}

  componentDidMount() {
    fetch("https://randomuser.me/api?results=25")
    .then(response => response.json())
    .then(d => this.setState({ people: d.results }))

  }

	render() {

		return(
			
			<div>
				<h1 id="heading">Rolodex List</h1>
				<Details />
			</div>
		)
	}
}
export default Rolodex



