import { h, Component } from 'preact';
import style from './style.less';
import axios from 'axios';

export default class Todo extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tasks: [
				{
					short: 'test',
					long: 'tester',
					done: true
				}
			]
		};
	}

	componentDidMount() {
		axios.get('http://localhost:8080/').then(res => {
			this.setState({
				tasks: res.data
			});
		});
	}

	render({}, { tasks, etc  }) {

		return (
			<div class={style.todo}>
				<h1>To-Do</h1>
				<p>This is the To-Do List:</p>
				<ul>
					{tasks.map(function(task, index) {
						return <li><input type="checkbox" />{task.short}</li>
					})}
				</ul>
			</div>
		);
	}
}
