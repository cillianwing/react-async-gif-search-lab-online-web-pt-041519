import React from 'react'

export default class GifSearch extends React.Component {

	constructor() {
		super()
		this.state = {
			search: ''
		}
	}

	handleChange = (event) => {
		this.setState({
			search: event.target.value
		})
	}

	render() {
		return (
			<form onSubmit={event => this.props.handleSubmit(event)}>
				<div>
					<label>
						Enter a Search Term:
						<input onChange={this.handleChange} type="text" value={this.state.search} />
					</label>
				</div>
				<div>
					<button type="submit">Find Gifs</button>
				</div>
			</form>
		)
	}

}