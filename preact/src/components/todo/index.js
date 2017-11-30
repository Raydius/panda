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

			let doneArray = [];

			for(let n=0; n<res.data.length; n++) {
				if(res.data[n].done === true) {
					doneArray.push(res.data[n].short);
				}
			}

			this.setState({
				doneArray: doneArray,
				newTask: '',
				tasks: res.data
			});
		});
	}

	handleChange = (event) => {
		this.setState({ newTask: event.target.value  });
	};

	handleCheckbox = (event) => {

		let url = 'http://localhost:8080/task/'+encodeURI(event.target.name)+'/done';

		axios.post(url, {
			done: event.target.checked
		}).then((response) => {
			this.refreshList();
		}).catch((err) => {
			// handle error

		});
	};

	handleClear = (event) => {

		axios.post('http://localhost:8080/task/clear', {
			doneArray: this.state.doneArray
		}).then((response) => {
			this.refreshList();
		}).catch(function(err) {
			// handle error
		});
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
							return <li><input name={task.short} type="checkbox" checked={task.done} onClick={this.handleCheckbox} />
								<span class={task.done ? style.done:""}>{task.short}</span></li>
						})}
					</ul>

					<label>Add Task</label>
					<input type="text" name="short" value={this.state.newTask} onChange={this.handleChange} />
					<input type="submit" value="Add" />
					<input type="button" value="Clear Completed" onClick={this.handleClear} />
				</form>
			</div>
		);
	}
}
