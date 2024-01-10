import './preloader';
import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Cards } from './components/Cards';
import { Search } from './components/Search';
import { Loader } from './components/Loader';

class App extends React.Component {
	state = {
		posts: '',
		search: '',
		genre: '',
		platform: '',
		loading: 'true',
	};

	componentDidMount() {
		this.setState({ loading: 'true' });
		console.log('mount');
		fetch('https://api.rawg.io/api/games?key=53b622c599524a3381f791cd01725d0b')
			.then((res) => res.json())
			.then((data) => this.setState({ posts: data.results, loading: 'false' }));
	}

	letItClick = () => {
		this.setState({ loading: 'true' });
		this.setState({ posts: '' });
		fetch(`https://api.rawg.io/api/games?key=53b622c599524a3381f791cd01725d0b${this.state.search ? '&search=' + this.state.search : ''}${this.state.genre ? '&genres=' + this.state.genre : ''}${this.state.platform ? '&platforms=' + this.state.platform : ''}`)
			.then((res) => res.json())
			.then((data) => this.setState({ posts: data.results, loading: 'false' }));
	};

	letItChoose = (v) => {
		console.log(v.target);
		this.setState({ [v.target.name]: v.target.value });
	};

	render() {
		return (
			<div>
				<Header />
				<Search fselect={this.letItChoose} ftype={this.letItChoose} fclick={this.letItClick} />
				{this.state.loading === 'true' ? <Loader /> : this.state.posts.length !== 0 ? <Cards cards={this.state.posts} /> : <h4>По запросу результатов не найдено</h4>}
				<Footer />
			</div>
		);
	}
}

export default App;
