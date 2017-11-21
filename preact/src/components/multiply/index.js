import { h, Component } from 'preact';
import style from './style.less';

export default class Multiply extends Component {

	// setting the state vars with a constructor ensures it only gets set once (versus maintained as const)
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			value1: 1,
			value2: 1,
			product: 1
		};
	}

	// update the current time
	updateTime = () => {
		let time = new Date().toLocaleString();
		this.setState({ time });
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
		this.updateTime();

		// every time we get remounted, increment a counter:
		this.setState({ count: this.state.count+1 });
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	handleChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : parseInt(target.value);
		const name = target.name;

		this.setState({
			[name]: isNaN(value) ? 1 : value
		});

		this.setState({
			product: this.state.value1 * this.state.value2
		});

	}

	// Note: `user` comes from the URL, courtesy of our router, the rest are lazy loaded from this.state
	render({ user }, { time, count, product }) {
		return (
			<div class={style.profile}>
				<h1>Multiplier</h1>
				<p>This is a form that multiplies two values and arrives at a product.</p>

				<div class={style.equation}>
					<span><input name="value1" type="text" value={this.state.value1} onKeyUp={this.handleChange} /></span> x
					<span><input name="value2" type="text" value={this.state.value2} onKeyUp={this.handleChange} /></span> =
					<span>{product}</span>
				</div>
			</div>
		);
	}
}
