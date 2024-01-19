import './preloader';
import React, { useEffect, useState, useReducer } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Cards } from './components/Cards';
import { Search } from './components/Search';
import { Loader } from './components/Loader';

function App() {
	const [posts, statePosts] = useState();
	const [loading, stateLoading] = useState(true);

	const newReducer = (state, action) => {
		console.log(action.type);
		console.log(action.payload);
		switch (action.type) {
			case 'select':
				return {
					...state,
					genre: action.payload,
				};
			case 'radio':
				return {
					...state,
					platform: action.payload,
				};
			case 'search':
				return {
					...state,
					search: action.payload,
				};
			default:
				console.log('slomano');
				break;
		}
	};

	const [{ genre, platform, search }, dispatch] = useReducer(newReducer, { genre: '', platform: '', search: '' });

	useEffect(() => {
		stateLoading(true);
		console.log('mount');
		fetch('https://api.rawg.io/api/games?key=53b622c599524a3381f791cd01725d0b')
			.then((res) => res.json())
			.then((data) => {
				statePosts(data.results);
				stateLoading(false);
			});
	}, []);

	function letItClick() {
		console.log(platform);
		stateLoading(true);
		statePosts('');
		fetch(`https://api.rawg.io/api/games?key=53b622c599524a3381f791cd01725d0b${search ? '&search=' + search : ''}${genre ? '&genres=' + genre : ''}${platform ? '&platforms=' + platform : ''}`)
			.then((res) => res.json())
			.then((data) => statePosts(data.results))
			.then(() => stateLoading(false));
	}

	return (
		<div>
			<Header />
			<Search fselect={(type) => dispatch(type)} fclick={letItClick} />
			{loading === true ? <Loader /> : posts.length > 0 ? <Cards cards={posts} /> : <h4>По запросу результатов не найдено</h4>}
			<Footer />
		</div>
	);
}

export default App;
