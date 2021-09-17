import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// This section is so show JSX at it's simplest
// =======================================================
// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
// =======================================================

// This section is to show a bit more from the above
// =======================================================
// function formatName(user) {
// 	return user.firstName + ' ' + user.lastName;
// }

// function getGreeting(user) {
// 	if (user) {
// 		return <h1>Hello, {formatName(user)}!</h1>;
// 	}
// 	return <h1>Hello Stranger.</h1>;
// }

// const user = {
// 	firstName: 'Kevin',
// 	lastName: 'Estrada',
// };

// // const element = getGreeting();

// const element = <div tabIndex="0"></div>;

// ReactDOM.render(element, document.getElementById('root'));
// =======================================================

// This section is use to render an immutable element in react.
// =======================================================
// function tick() {
// 	const element = (
// 		<div>
// 			<h1>Hello World!</h1>
// 			<h2>It is {new Date().toLocaleTimeString()}.</h2>
// 		</div>
// 	);
// 	ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);
// =======================================================

// This section is used to render a componentin React
// =======================================================
// function Welcome(props) {
// 	return <h1>Hello, {props.name}</h1>;
// }

// function App() {
// 	return (
// 		<div>
// 			<Welcome name="Sara" />
// 			<Welcome name="Cahal" />
// 			<Welcome name="Edite" />
// 		</div>
// 	);
// }

// ReactDOM.render(<App />, document.getElementById('root'));
// =======================================================

// This section is used to render various components in React
// =======================================================
// function formatDate(date) {
// 	return date.toLocaleDateString();
// }

// function Avatar(props) {
// 	return (
// 		<img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
// 	);
// }

// function UserInfo(props) {
// 	return (
// 		<div className="UserInfo">
// 			<Avatar user={props.user} />
// 			<div className="UserInfo-name">{props.user.name}</div>
// 		</div>
// 	);
// }

// function Comment(props) {
// 	return (
// 		<div className="Comment">
// 			<UserInfo user={props.author} />
// 			<div className="Comment-text">{props.text}</div>
// 			<div className="Comment-date">{formatDate(props.date)}</div>
// 		</div>
// 	);
// }

// const comment = {
// 	date: new Date(),
// 	text: 'I hope you enjoy learning React!',
// 	author: {
// 		name: 'Hello Kitty',
// 		avatarUrl: 'https://placekitten.com/g/64/64',
// 	},
// };
// ReactDOM.render(
// 	<Comment date={comment.date} text={comment.text} author={comment.author} />,
// 	document.getElementById('root')
// );

// =======================================================

// This section is to fully encapsulate state in React without having to call the Render component over and over
// =======================================================
// function Clock(props) {
// 	return (
// 		<div>
// 			<h1>Hello, world!</h1>
// 			<h2>It is {props.date.toLocaleTimeString()}.</h2>
// 		</div>
// 	);
// }

// function tick() {
// 	ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// function FormattedDate(props) {
// 	return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
// }
// class Clock extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { date: new Date() };
// 	}

// 	componentDidMount() {
// 		this.timerID = setInterval(() => this.tick(), 1000);
// 	}

// 	componentWillUnmount() {
// 		clearInterval(this.timerID);
// 	}

// 	tick() {
// 		this.setState({
// 			date: new Date(),
// 		});
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello, world!</h1>
// 				<FormattedDate date={this.state.date} />
// 			</div>
// 		);
// 	}
// }

// function App() {
// 	return (
// 		<div>
// 			<Clock />
// 			<Clock />
// 			<Clock />
// 		</div>
// 	);
// }

// ReactDOM.render(<App />, document.getElementById('root'));

//=========================================================
// This section is used to show how to handle events in React

// class Toggle extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { isToggleOn: true };

// 		// This binding is necessary to make `this` work in the callback
// 		this.handleClick = this.handleClick.bind(this);
// 	}

// 	handleClick() {
// 		this.setState((prevState) => ({
// 			isToggleOn: !prevState.isToggleOn,
// 		}));
// 	}

// 	render() {
// 		return (
// 			<button onClick={this.handleClick}>
// 				{this.state.isToggleOn ? 'ON' : 'OFF'}
// 			</button>
// 		);
// 	}
// }

// ReactDOM.render(<Toggle />, document.getElementById('root'));

//=========================================================
// This section is used to show how to handle conditional rendering in React by implementing a small example of login and logout button
//=========================================================

// function UserGreeting(props) {
// 	return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
// 	return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
// 	const isLoggedIn = props.isLoggedIn;
// 	const messages = ['React', 'Re: React', 'Re:Re: React', 'This'];
// 	if (isLoggedIn) {
// 		return (
// 			<div>
// 				<UserGreeting />
// 				<Mailbox unreadMessages={messages} />
// 			</div>
// 		);
// 	}
// 	return <GuestGreeting />;
// }

// function LoginButton(props) {
// 	return <button onClick={props.onClick}>Login</button>;
// }

// function LogoutButton(props) {
// 	return <button onClick={props.onClick}>Logout</button>;
// }

// function Mailbox(props) {
// 	const unreadMessages = props.unreadMessages;
// 	return (
// 		<div>
// 			{unreadMessages.length > 0 && (
// 				<h2>You have {unreadMessages.length} unread messages.</h2>
// 			)}
// 		</div>
// 	);
// }

// class LoginControl extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleLoginClick = this.handleLoginClick.bind(this);
// 		this.handleLogoutClick = this.handleLogoutClick.bind(this);
// 		this.state = { isLoggedIn: false };
// 	}

// 	handleLoginClick() {
// 		this.setState({ isLoggedIn: true });
// 	}

// 	handleLogoutClick() {
// 		this.setState({ isLoggedIn: false });
// 	}

// 	render() {
// 		const isLoggedIn = this.state.isLoggedIn;
// 		let button;
// 		if (isLoggedIn) {
// 			button = <LogoutButton onClick={this.handleLogoutClick} />;
// 		} else {
// 			button = <LoginButton onClick={this.handleLoginClick} />;
// 		}

// 		return (
// 			<div>
// 				<Greeting isLoggedIn={isLoggedIn} />
// 				{button}
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(<LoginControl />, document.getElementById('root'));

//=========================================================
// This section is used to show how to handle conditional rendering in React by implementing a small example of login and logout button
//=========================================================
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) => <li>{number}</li>);

// ReactDOM.render(<ul>{listItems}</ul>, document.getElementById('root'));

// function NumberList(props) {
// 	const numbers = props.numbers;
// 	const listItems = numbers.map((number) => <li>{number}</li>);
// 	return <ul>{listItems}</ul>;
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
// 	<NumberList numbers={numbers} />,
// 	document.getElementById('root')
// );

// function ListItem(props) {
// 	// Correct! There is no need to specify the key here:
// 	return <li>{props.value}</li>;
// }

// function NumberList(props) {
// 	const numbers = props.numbers;
// 	const listItems = numbers.map((number) => (
// 		// Correct! Key should be specified inside the array.
// 		<ListItem key={number.toString()} value={number} />
// 	));
// 	return <ul>{listItems}</ul>;
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// ReactDOM.render(
// 	<NumberList numbers={numbers} />,
// 	document.getElementById('root')
// );

// function Blog(props) {
// 	const sidebar = (
// 		<ul>
// 			{props.posts.map((post) => (
// 				<li key={post.id}>{post.title}</li>
// 			))}
// 		</ul>
// 	);
// 	const content = props.posts.map((post) => (
// 		<div key={post.id}>
// 			<h3>{post.title}</h3>
// 			<p>{post.content}</p>
// 		</div>
// 	));
// 	return (
// 		<div>
// 			{sidebar}
// 			<hr />
// 			{content}
// 		</div>
// 	);
// }

// const posts = [
// 	{ id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
// 	{ id: 2, title: 'Installation', content: 'You can install React from npm.' },
// ];
// ReactDOM.render(<Blog posts={posts} />, document.getElementById('root'));

//=========================================================
// This section is used to show how to handle Forms in React as they handle differently
//=========================================================

// class NameForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { value: '' };

// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	handleChange(event) {
// 		this.setState({ value: event.target.value });
// 	}

// 	handleSubmit(event) {
// 		alert('A name was submitted: ' + this.state.value);
// 		event.preventDefault();
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					Name:
// 					<input
// 						type="text"
// 						value={this.state.value}
// 						onChange={this.handleChange}
// 					/>
// 				</label>
// 				<input type="submit" value="Submit" />
// 			</form>
// 		);
// 	}
// }

// class EssayForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			value: 'Please write an essay about your favorite DOM element.',
// 		};

// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	handleChange(event) {
// 		this.setState({ value: event.target.value });
// 	}

// 	handleSubmit(event) {
// 		alert('An essay was submitted: ' + this.state.value);
// 		event.preventDefault();
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					Essay:
// 					<textarea value={this.state.value} onChange={this.handleChange} />
// 				</label>
// 				<input type="submit" value="Submit" />
// 			</form>
// 		);
// 	}
// }

// class FlavorForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { value: 'mango' };

// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	handleChange(event) {
// 		this.setState({ value: event.target.value });
// 	}

// 	handleSubmit(event) {
// 		alert('Your favorite flavor is: ' + this.state.value);
// 		event.preventDefault();
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					Pick your favorite flavor:
// 					<select value={this.state.value} onChange={this.handleChange}>
// 						<option value="grapefruit">Grapefruit</option>
// 						<option value="lime">Lime</option>
// 						<option value="coconut">Coconut</option>
// 						<option value="mango">Mango</option>
// 					</select>
// 				</label>
// 				<input type="submit" value="Submit" />
// 			</form>
// 		);
// 	}
// }

// class Reservation extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			isGoing: true,
// 			numberOfGuests: 2,
// 		};

// 		this.handleInputChange = this.handleInputChange.bind(this);
// 	}

// 	handleInputChange(event) {
// 		const target = event.target;
// 		const value = target.type === 'checkbox' ? target.checked : target.value;
// 		const name = target.name;

// 		this.setState({
// 			[name]: value,
// 		});
// 	}

// 	render() {
// 		return (
// 			<form>
// 				<label>
// 					Is going:
// 					<input
// 						name="isGoing"
// 						type="checkbox"
// 						checked={this.state.isGoing}
// 						onChange={this.handleInputChange}
// 					/>
// 				</label>
// 				<br />
// 				<label>
// 					Number of guests:
// 					<input
// 						name="numberOfGuests"
// 						type="number"
// 						value={this.state.numberOfGuests}
// 						onChange={this.handleInputChange}
// 					/>
// 				</label>
// 			</form>
// 		);
// 	}
// }

// ReactDOM.render(
// 	<div>
// 		<NameForm />
// 		<EssayForm />
// 		<FlavorForm />
// 		<Reservation />
// 	</div>,
// 	document.getElementById('root')
// );

//=========================================================
// This section is used to show how to handle lifting state up as several components neeed to reflect data change using temperature
//=========================================================

// function BoilingVerdict(props) {
// 	if (props.celsius >= 100) {
// 		return <p>The water would boil.</p>;
// 	}
// 	return <p>The water would not boil.</p>;
// }

// function toCelsius(fahrenheit) {
// 	return ((fahrenheit - 32) * 5) / 9;
// }

// function toFahrenheit(celsius) {
// 	return (celsius * 9) / 5 + 32;
// }

// function tryConvert(temperature, convert) {
// 	const input = parseFloat(temperature);
// 	if (Number.isNaN(input)) {
// 		return '';
// 	}
// 	const output = convert(input);
// 	const rounded = Math.round(output * 1000) / 1000;
// 	return rounded.toString();
// }

// const scaleNames = {
// 	c: 'Celsius',
// 	f: 'Fahrenheit',
// };

// class TemperatureInput extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleChange = this.handleChange.bind(this);
// 		this.state = { temperature: '' };
// 	}

// 	handleChange(e) {
// 		// Before: this.setState({temperature: e.target.value});
// 		this.props.onTemperatureChange(e.target.value);
// 	}

// 	render() {
// 		// Before: const temperature = this.state.temperature;
// 		const temperature = this.props.temperature;
// 		const scale = this.props.scale;
// 		return (
// 			<fieldset>
// 				<legend>Enter temperature in {scaleNames[scale]}:</legend>
// 				<input value={temperature} onChange={this.handleChange} />
// 			</fieldset>
// 		);
// 	}
// }

// class Calculator extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
// 		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
// 		this.state = { temperature: '', scale: 'c' };
// 	}

// 	handleCelsiusChange(temperature) {
// 		this.setState({ scale: 'c', temperature });
// 	}

// 	handleFahrenheitChange(temperature) {
// 		this.setState({ scale: 'f', temperature });
// 	}

// 	render() {
// 		const scale = this.state.scale;
// 		const temperature = this.state.temperature;
// 		const celsius =
// 			scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
// 		const fahrenheit =
// 			scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

// 		return (
// 			<div>
// 				<TemperatureInput
// 					scale="c"
// 					temperature={celsius}
// 					onTemperatureChange={this.handleCelsiusChange}
// 				/>
// 				<TemperatureInput
// 					scale="f"
// 					temperature={fahrenheit}
// 					onTemperatureChange={this.handleFahrenheitChange}
// 				/>
// 				<BoilingVerdict celsius={parseFloat(celsius)} />
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(<Calculator />, document.getElementById('root'));

//=========================================================
// This section is used to show how to handle Composition versus inheritance
//=========================================================

// function SplitPane(props) {
// 	return (
// 	  <div className="SplitPane">
// 		<div className="SplitPane-left">
// 		  {props.left}
// 		</div>
// 		<div className="SplitPane-right">
// 		  {props.right}
// 		</div>
// 	  </div>
// 	);
//   }

//   function App() {
// 	return (
// 	  <SplitPane
// 		left={
// 		  <Contacts />
// 		}
// 		right={
// 		  <Chat />
// 		} />
// 	);
//   }

// function FancyBorder(props) {
// 	return (
// 		<div className={'FancyBorder FancyBorder-' + props.color}>
// 			{props.children}
// 		</div>
// 	);
// }

// function Dialog(props) {
// 	return (
// 		<FancyBorder color="blue">
// 			<h1 className="Dialog-title">{props.title}</h1>
// 			<p className="Dialog-message">{props.message}</p>
// 			{props.children}
// 		</FancyBorder>
// 	);
// }

// class SignUpDialog extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSignUp = this.handleSignUp.bind(this);
// 		this.state = { login: '' };
// 	}

// 	render() {
// 		return (
// 			<Dialog
// 				title="Mars Exploration Program"
// 				message="How should we refer to you?"
// 			>
// 				<input value={this.state.login} onChange={this.handleChange} />
// 				<button onClick={this.handleSignUp}>Sign Me Up!</button>
// 			</Dialog>
// 		);
// 	}

// 	handleChange(e) {
// 		this.setState({ login: e.target.value });
// 	}

// 	handleSignUp() {
// 		alert(`Welcome aboard, ${this.state.login}!`);
// 	}
// }

// ReactDOM.render(<SignUpDialog />, document.getElementById('root'));

//=========================================================
// This section is used to show how to think in React and use static and state components to render data using an example
//=========================================================

//Step 1 in thinking in React!
// You’ll see here that we have five components in our app. We’ve italicized the data each component represents. The numbers in the image correspond to the numbers below.

// FilterableProductTable (orange): contains the entirety of the example
// SearchBar (blue): receives all user input
// ProductTable (green): displays and filters the data collection based on user input
// ProductCategoryRow (turquoise): displays a heading for each category
// ProductRow (red): displays a row for each product
// If you look at ProductTable, you’ll see that the table header (containing the “Name” and “Price” labels) isn’t its own component. This is a matter of preference, and there’s an
// argument to be made either way. For this example, we left it as part of ProductTable because it is part of rendering the data collection which is ProductTable’s responsibility.
// However, if this header grows to be complex (e.g., if we were to add affordances for sorting), it would certainly make sense to make this its own ProductTableHeader component.

// Now that we’ve identified the components in our mock, let’s arrange them into a hierarchy. Components that appear within another component in the mock should appear as a child in the hierarchy:

// FilterableProductTable
// 		SearchBar
// 		ProductTable
// 			ProductCategoryRow
// 			ProductRow

//Step 2 in thinking in React!
// class ProductCategoryRow extends React.Component {
// 	render() {
// 		const category = this.props.category;
// 		return (
// 			<tr>
// 				<th colSpan="2">{category}</th>
// 			</tr>
// 		);
// 	}
// }

// class ProductRow extends React.Component {
// 	render() {
// 		const product = this.props.product;
// 		const name = product.stocked ? (
// 			product.name
// 		) : (
// 			<span style={{ color: 'red' }}>{product.name}</span>
// 		);

// 		return (
// 			<tr>
// 				<td>{name}</td>
// 				<td>{product.price}</td>
// 			</tr>
// 		);
// 	}
// }

// class ProductTable extends React.Component {
// 	render() {
// 		const rows = [];
// 		let lastCategory = null;

// 		this.props.products.forEach((product) => {
// 			if (product.category !== lastCategory) {
// 				rows.push(
// 					<ProductCategoryRow
// 						category={product.category}
// 						key={product.category}
// 					/>
// 				);
// 			}
// 			rows.push(<ProductRow product={product} key={product.name} />);
// 			lastCategory = product.category;
// 		});

// 		return (
// 			<table>
// 				<thead>
// 					<tr>
// 						<th>Name</th>
// 						<th>Price</th>
// 					</tr>
// 				</thead>
// 				<tbody>{rows}</tbody>
// 			</table>
// 		);
// 	}
// }

// class SearchBar extends React.Component {
// 	render() {
// 		return (
// 			<form>
// 				<input type="text" placeholder="Search..." />
// 				<p>
// 					<input type="checkbox" /> Only show products in stock
// 				</p>
// 			</form>
// 		);
// 	}
// }

// class FilterableProductTable extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<SearchBar />
// 				<ProductTable products={this.props.products} />
// 			</div>
// 		);
// 	}
// }

// const PRODUCTS = [
// 	{
// 		category: 'Sporting Goods',
// 		price: '$49.99',
// 		stocked: true,
// 		name: 'Football',
// 	},
// 	{
// 		category: 'Sporting Goods',
// 		price: '$9.99',
// 		stocked: true,
// 		name: 'Baseball',
// 	},
// 	{
// 		category: 'Sporting Goods',
// 		price: '$29.99',
// 		stocked: false,
// 		name: 'Basketball',
// 	},
// 	{
// 		category: 'Electronics',
// 		price: '$99.99',
// 		stocked: true,
// 		name: 'iPod Touch',
// 	},
// 	{
// 		category: 'Electronics',
// 		price: '$399.99',
// 		stocked: false,
// 		name: 'iPhone 5',
// 	},
// 	{ category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
// ];

// ReactDOM.render(
// 	<FilterableProductTable products={PRODUCTS} />,
// 	document.getElementById('root')
// );

//Step 3 in thinking in React!
// To make your UI interactive, you need to be able to trigger changes to your underlying data model. React achieves this with state.

// To build your app correctly, you first need to think of the minimal set of mutable state that your app needs. The key here is DRY: Don’t Repeat Yourself. Figure out the absolute minimal
//representation of the state your application needs and compute everything else you need on-demand. For example, if you’re building a TODO list, keep an array of the TODO items around; don’t keep a
// separate state variable for the count. Instead, when you want to render the TODO count, take the length of the TODO items array.

// Think of all the pieces of data in our example application. We have:

// The original list of products
// The search text the user has entered
// The value of the checkbox
// The filtered list of products
// Let’s go through each one and figure out which one is state. Ask three questions about each piece of data:

// Is it passed in from a parent via props? If so, it probably isn’t state.
// Does it remain unchanged over time? If so, it probably isn’t state.
// Can you compute it based on any other state or props in your component? If so, it isn’t state.
// The original list of products is passed in as props, so that’s not state. The search text and the checkbox seem to be state since they change over time and can’t be computed from anything. And
// finally, the filtered list of products isn’t state because it can be computed by combining the original list of products with the search text and value of the checkbox.

// So finally, our state is:

// The search text the user has entered
// The value of the checkbox

//Step 4 in thinking in react!
// class ProductCategoryRow extends React.Component {
// 	render() {
// 		const category = this.props.category;
// 		return (
// 			<tr>
// 				<th colSpan="2">{category}</th>
// 			</tr>
// 		);
// 	}
// }

// class ProductRow extends React.Component {
// 	render() {
// 		const product = this.props.product;
// 		const name = product.stocked ? (
// 			product.name
// 		) : (
// 			<span style={{ color: 'red' }}>{product.name}</span>
// 		);

// 		return (
// 			<tr>
// 				<td>{name}</td>
// 				<td>{product.price}</td>
// 			</tr>
// 		);
// 	}
// }

// class ProductTable extends React.Component {
// 	render() {
// 		const filterText = this.props.filterText;
// 		const inStockOnly = this.props.inStockOnly;

// 		const rows = [];
// 		let lastCategory = null;

// 		this.props.products.forEach((product) => {
// 			if (product.name.indexOf(filterText) === -1) {
// 				return;
// 			}
// 			if (inStockOnly && !product.stocked) {
// 				return;
// 			}
// 			if (product.category !== lastCategory) {
// 				rows.push(
// 					<ProductCategoryRow
// 						category={product.category}
// 						key={product.category}
// 					/>
// 				);
// 			}
// 			rows.push(<ProductRow product={product} key={product.name} />);
// 			lastCategory = product.category;
// 		});

// 		return (
// 			<table>
// 				<thead>
// 					<tr>
// 						<th>Name</th>
// 						<th>Price</th>
// 					</tr>
// 				</thead>
// 				<tbody>{rows}</tbody>
// 			</table>
// 		);
// 	}
// }

// class SearchBar extends React.Component {
// 	render() {
// 		const filterText = this.props.filterText;
// 		const inStockOnly = this.props.inStockOnly;

// 		return (
// 			<form>
// 				<input type="text" placeholder="Search..." value={filterText} />
// 				<p>
// 					<input type="checkbox" checked={inStockOnly} /> Only show products in
// 					stock
// 				</p>
// 			</form>
// 		);
// 	}
// }

// class FilterableProductTable extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			filterText: '',
// 			inStockOnly: false,
// 		};
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<SearchBar
// 					filterText={this.state.filterText}
// 					inStockOnly={this.state.inStockOnly}
// 				/>
// 				<ProductTable
// 					products={this.props.products}
// 					filterText={this.state.filterText}
// 					inStockOnly={this.state.inStockOnly}
// 				/>
// 			</div>
// 		);
// 	}
// }

// const PRODUCTS = [
// 	{
// 		category: 'Sporting Goods',
// 		price: '$49.99',
// 		stocked: true,
// 		name: 'Football',
// 	},
// 	{
// 		category: 'Sporting Goods',
// 		price: '$9.99',
// 		stocked: true,
// 		name: 'Baseball',
// 	},
// 	{
// 		category: 'Sporting Goods',
// 		price: '$29.99',
// 		stocked: false,
// 		name: 'Basketball',
// 	},
// 	{
// 		category: 'Electronics',
// 		price: '$99.99',
// 		stocked: true,
// 		name: 'iPod Touch',
// 	},
// 	{
// 		category: 'Electronics',
// 		price: '$399.99',
// 		stocked: false,
// 		name: 'iPhone 5',
// 	},
// 	{ category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
// ];

// ReactDOM.render(
// 	<FilterableProductTable products={PRODUCTS} />,
// 	document.getElementById('root')
// );

//Step 5 of thinking in React
// class ProductCategoryRow extends React.Component {
// 	render() {
// 		const category = this.props.category;
// 		return (
// 			<tr>
// 				<th colSpan="2">{category}</th>
// 			</tr>
// 		);
// 	}
// }

// class ProductRow extends React.Component {
// 	render() {
// 		const product = this.props.product;
// 		const name = product.stocked ? (
// 			product.name
// 		) : (
// 			<span style={{ color: 'red' }}>{product.name}</span>
// 		);

// 		return (
// 			<tr>
// 				<td>{name}</td>
// 				<td>{product.price}</td>
// 			</tr>
// 		);
// 	}
// }

// class ProductTable extends React.Component {
// 	render() {
// 		const filterText = this.props.filterText;
// 		const inStockOnly = this.props.inStockOnly;

// 		const rows = [];
// 		let lastCategory = null;

// 		this.props.products.forEach((product) => {
// 			if (product.name.indexOf(filterText) === -1) {
// 				return;
// 			}
// 			if (inStockOnly && !product.stocked) {
// 				return;
// 			}
// 			if (product.category !== lastCategory) {
// 				rows.push(
// 					<ProductCategoryRow
// 						category={product.category}
// 						key={product.category}
// 					/>
// 				);
// 			}
// 			rows.push(<ProductRow product={product} key={product.name} />);
// 			lastCategory = product.category;
// 		});

// 		return (
// 			<table>
// 				<thead>
// 					<tr>
// 						<th>Name</th>
// 						<th>Price</th>
// 					</tr>
// 				</thead>
// 				<tbody>{rows}</tbody>
// 			</table>
// 		);
// 	}
// }

// class SearchBar extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
// 		this.handleInStockChange = this.handleInStockChange.bind(this);
// 	}

// 	handleFilterTextChange(e) {
// 		this.props.onFilterTextChange(e.target.value);
// 	}

// 	handleInStockChange(e) {
// 		this.props.onInStockChange(e.target.checked);
// 	}

// 	render() {
// 		return (
// 			<form>
// 				<input
// 					type="text"
// 					placeholder="Search..."
// 					value={this.props.filterText}
// 					onChange={this.handleFilterTextChange}
// 				/>
// 				<p>
// 					<input
// 						type="checkbox"
// 						checked={this.props.inStockOnly}
// 						onChange={this.handleInStockChange}
// 					/>{' '}
// 					Only show products in stock
// 				</p>
// 			</form>
// 		);
// 	}
// }

// class FilterableProductTable extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			filterText: '',
// 			inStockOnly: false,
// 		};

// 		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
// 		this.handleInStockChange = this.handleInStockChange.bind(this);
// 	}

// 	handleFilterTextChange(filterText) {
// 		this.setState({
// 			filterText: filterText,
// 		});
// 	}

// 	handleInStockChange(inStockOnly) {
// 		this.setState({
// 			inStockOnly: inStockOnly,
// 		});
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<SearchBar
// 					filterText={this.state.filterText}
// 					inStockOnly={this.state.inStockOnly}
// 					onFilterTextChange={this.handleFilterTextChange}
// 					onInStockChange={this.handleInStockChange}
// 				/>
// 				<ProductTable
// 					products={this.props.products}
// 					filterText={this.state.filterText}
// 					inStockOnly={this.state.inStockOnly}
// 				/>
// 			</div>
// 		);
// 	}
// }

// const PRODUCTS = [
// 	{
// 		category: 'Sporting Goods',
// 		price: '$49.99',
// 		stocked: true,
// 		name: 'Football',
// 	},
// 	{
// 		category: 'Sporting Goods',
// 		price: '$9.99',
// 		stocked: true,
// 		name: 'Baseball',
// 	},
// 	{
// 		category: 'Sporting Goods',
// 		price: '$29.99',
// 		stocked: false,
// 		name: 'Basketball',
// 	},
// 	{
// 		category: 'Electronics',
// 		price: '$99.99',
// 		stocked: true,
// 		name: 'iPod Touch',
// 	},
// 	{
// 		category: 'Electronics',
// 		price: '$399.99',
// 		stocked: false,
// 		name: 'iPhone 5',
// 	},
// 	{ category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
// ];

// ReactDOM.render(
// 	<FilterableProductTable products={PRODUCTS} />,
// 	document.getElementById('root')
// );

//=========================================================
// This section is used to show how to use Hooks rather than classes for changing state.
//=========================================================

function Example() {
	const [count, setCount] = useState(0);

	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
		// Update the document title using the browser API
		document.title = `You clicked ${count} times`;
	});

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}

ReactDOM.render(<Example />, document.getElementById('root'));
