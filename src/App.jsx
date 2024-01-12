import './preloader';
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Cards } from './components/Cards';
import { Search } from './components/Search';
import { Loader } from './components/Loader';

function App() {
	const [posts, statePosts] = useState();
	const [search, stateSearch] = useState();
	const [genre, stateGenre] = useState();
	const [platform, statePlatform] = useState();
	const [loading, stateLoading] = useState(true);

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
		stateLoading(true);
		statePosts('');
		fetch(`https://api.rawg.io/api/games?key=53b622c599524a3381f791cd01725d0b${search ? '&search=' + search : ''}${genre ? '&genres=' + genre : ''}${platform ? '&platforms=' + platform : ''}`)
			.then((res) => res.json())
			.then((data) => statePosts(data.results))
			.then(() => stateLoading(false));
	}

	let letItChoose = (v) => {
		console.log(v.target);
		// setState({ [v.target.name]: v.target.value });
	};

	return (
		<div>
			<Header />
			<Search fselect={letItChoose} ftype={letItChoose} fclick={letItClick} />
			{loading === true ? <Loader /> : posts.length > 0 ? <Cards cards={posts} /> : <h4>По запросу результатов не найдено</h4>}
			<Footer />
		</div>
	);
}

export default App;
