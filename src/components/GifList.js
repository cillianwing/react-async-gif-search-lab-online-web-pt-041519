import React from 'react'

export default class GifList extends React.Component {

	oneGif() {
		return (
			<ul>
				<li><img src={this.props.gifs[0]} alt="Loading..." /></li>
			</ul>
		)
	}

	twoGifs() {
		return (
			<ul>
				<li><img src={this.props.gifs[0]} alt="Loading..." /></li>
				<li><img src={this.props.gifs[2]} alt="Loading..." /></li>
			</ul>
		)		
	}

	threeGifs() {
		return (
			<ul>
				<li><img src={this.props.gifs[0]} alt="Loading..." /></li>
				<li><img src={this.props.gifs[1]} alt="Loading..." /></li>
				<li><img src={this.props.gifs[2]} alt="Loading..." /></li>
			</ul>			
		)
	}

	render() {
		if (this.props.gifs.length === 0) {
			return (<div></div>)
		} else {
			if (this.props.gifs.length === 1) {
				return this.oneGif()
			} else if (this.props.gifs.length === 2) {
				return this.twoGifs()
			} else {
				return this.threeGifs()
			}
		}

	}

}