import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {

	constructor() {
		super()
		this.state = {
			gifs: []
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()
		fetch(`https://api.giphy.com/v1/gifs/search?q=${event.target[0].value}&api_key=MMvlBvPMf5uplLqqNjMR8V6W3DZML5h4&rating=g`)
			.then(res => res.json())
			.then(json => {
				const gifsArr = []
				if (json.data.length === 1) {
					gifsArr.push(json.data[0].images.original.url)
				} else if (json.data.length === 2) {
					for (let i = 0; i < 2; i++) {
						gifsArr.push(json.data[i].images.original.url)
					}					
				} else if (json.data.length > 2) {
					for (let i = 0; i < 3; i++) {
						gifsArr.push(json.data[i].images.original.url)
					}
				}
				this.setState({
					gifs: gifsArr
				})
			})
	}

	render() {
		return(
			<div>
				<GifSearch handleSubmit={this.handleSubmit} />
				<GifList gifs={this.state.gifs} />
			</div>
		)
	}

}