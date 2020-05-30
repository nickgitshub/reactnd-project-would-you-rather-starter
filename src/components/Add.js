import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class Add extends Component {

	state = {
		optionOne: "",
		optionTwo: "",
		submitted: false
	}

	handleTextChange = (changeEvent) => {

		if(changeEvent.target.id==='optionOne'){
			this.setState({
				optionOne: changeEvent.target.value
			});
		} else if(changeEvent.target.id==='optionTwo'){
			this.setState({
				optionTwo: changeEvent.target.value
			});
		} 
		
	}

	handleSubmission = (changeEvent) => {
		changeEvent.preventDefault()
		
		this.props.dispatch(saveQuestion(this.state.optionOne, this.state.optionTwo, this.props.authedUser))
		this.setState({
				optionOne: "",
				optionTwo: "",
				submitted: true
			});

	}

	render(){

		if(this.state.submitted){
			return(
				<Redirect to="/" />
			)
		}else{
			return(
				<div className="addQuestion">
					<h1>Create New Question</h1>
					<h3>Complete the question: </h3>
					<form onSubmit={this.handleSubmission} >
						<h2>Would you rather...</h2>
						<input type="text" id="optionOne" placeholder="Enter Option One Text Here" value={this.state.optionOne} onChange={this.handleTextChange}/>
						<input type="text" id="optionTwo" placeholder="Enter Option Two Text Here" value={this.state.optionTwo} onChange={this.handleTextChange}/>
						<div>
						<button type="submit">Submit</button>
						</div>
					</form>
				</div>
			)
			
		}
		
	}
}
function mapStateToProps({ authedUser }){
	return{
		authedUser,
	}
}
export default connect(mapStateToProps)(Add);