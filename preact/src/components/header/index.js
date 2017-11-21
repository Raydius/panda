import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.less';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>PANDA</h1>
				<nav>
					<Link href="/">Home</Link>
					<Link href="/multiply/">Multiply</Link>
					<Link href="/todo/">To-Do</Link>
				</nav>
			</header>
		);
	}
}
