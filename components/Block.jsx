import { Component } from 'preact';
export default class Block extends Component {
	render(){
		return (
			<section>
				<h2>{this.props.message}</h2>
				<p>This is a block written by {this.props.name}</p>
			</section>
		);
	}
}