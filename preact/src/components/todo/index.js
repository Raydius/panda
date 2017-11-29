import { h, Component } from 'preact';
import style from './style.less';
import axios from 'axios';

export default class Todo extends Component {

	constructor(props) {
		super(props);

		// empty state
		this.state = {
			newTask: '',
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
		this.refreshList();
	}



	// get updated task list and setState tasks property
	refreshList() {
		axios.get('http://localhost:8080/').then(res => {
			this.setState({
				tasks: res.data
			});
		});
	}

	handleChange = (event) => {
		this.setState({ newTask: event.target.value });
	};

	handleCheckbox = (event) => {

		console.log('Short-name: '+ event.name + ', Done: '+event.value);

		let url = 'http://localhost:8080/'+encodeURI(event.target.name)+'/done';
		console.log('Url: '+url);
		/*


		axios.post('http://localhost:8080/task/done', {
			short: this.event.target.name,
			done: this.event.target.value
		}).then((response) => {
			this.refreshList();
		}).catch((err) => {
			// handle error

		});*/
	};

	handleSubmit = (event) => {
		event.preventDefault();

		axios.post('http://localhost:8080/task/add', {
			short: this.state.newTask
		}).then((response) => {
			this.refreshList();
		}).catch(function(err) {
			// handle error
		});
	};

	render({}, { tasks, etc  }) {

		return (
			<div class={style.todo}>
				<h1>To-Do</h1>
				<form onSubmit={this.handleSubmit}>
					<p>This is the To-Do List:</p>
					<ul>
						{tasks.map((task, index) => {
							return <li><input type="checkbox" value={task.done} onClick={this.handleCheckbox} />
								{task.short}</li>
						})}
					</ul>

					<label>Add Task</label>
					<input type="text" name="short" value={this.state.newTask} onChange={this.handleChange} />
					<input type="submit" value="Add" />
				</form>
			</div>
		);
	}
}
