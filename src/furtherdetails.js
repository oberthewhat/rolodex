

import React, { Component } from 'react'


export default class FurtherDetails extends Component {
	constructor(props) {
		super(props)

		this.state = {
			button: false
		}
	  
		this.handleClick = this.handleClick.bind(this);
	
	}

	handleClick() {
    this.setState(state => ({
      button: !state.button
    }));
  }


	render() {
		console.log(this.state.button)
		if(!this.state.button){
		return (
			<div className="peepsCard">
				<img src={this.props.thumbnail} alt="img not found"></img>
				<h1>{this.props.firstname + ' ' + this.props.lastname}</h1>
				<button onClick={this.handleClick}>Show More</button>
			</div>
		)
	}else{
		return(
			<div className="peepsCard">
			<img src={this.props.thumbnail} alt="img not found"></img>
			<h1>{this.props.firstname + ' ' + this.props.lastname}</h1>
			<p>{"Phone: " + this.props.cell}</p>
		  <p>{"Age: " + this.props.age}</p>
		  <a href={"mailto:"+this.props.email}>{this.props.email}</a>
		  <p>{"    "}</p>
			<button onClick={this.handleClick}>Show Less</button>
		</div>
		)
	}
}
}


