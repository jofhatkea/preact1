import './style';
import { Component } from 'preact';
import Block from './components/Block';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: [
				{
					name: "Ulf",
					message: "Hi mom"
				},
				{
					name: "Hefner",
					message: "I dont know"
				}
			],
			title: "Hello, Preact!"			
		}
		this.buttonClicked = this.buttonClicked.bind(this);
	}
	buttonClicked(){
		let newData = this.state.data;
		newData.push(
			{
				name: "I'm magical",
				message: "JSX generated"
			}
		)
		
		this.setState({
			data: newData
		})
	}
	render() {
		console.log(this)
		let blocks = this.state.data.map(bl => {
			return <Block name={bl.name} message={bl.message} />
		})
		return (
			<div>
				<button onClick={this.buttonClicked}>Click me</button>
				<h1>{this.state.title}</h1>
				{blocks}
			</div>
		);
	}
}
