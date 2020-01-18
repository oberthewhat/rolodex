import React from "react";
import FurtherDetails from './furtherdetails'

class Details extends React.Component {
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
		console.log(this.state.people.results)
		console.log("button state: " + this.state.button)


		return(
			
			<div>
				{this.state.people.map((peeps) => (
					<div key={peeps.phone} className='listCard'>
						<FurtherDetails thumbnail={peeps.picture.thumbnail} firstname={peeps.name.first} lastname = {peeps.name.last} cell={peeps.cell} age={peeps.dob.age} email ={peeps.email}/>
					</div>
				))}
				
			</div>
		)
	}

}
	export default Details