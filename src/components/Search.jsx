export function Search(props) {
	return (
		<div className="input-field col s6">
			<select name="genre" onChange={(v) => props.fselect(v, 'select')}>
				<option value="">Выберите жанр</option>
				<option value="action">Экшен</option>
				<option value="indie">Инди</option>
				<option value="role-playing-games-rpg">РПГ</option>
				<option value="strategy">Стратегии</option>
				<option value="shooter">Шутеры</option>
				<option value="casual">Казуальные</option>
				<option value="simulation">Симуляторы</option>
				<option value="puzzle">Пазлы</option>
				<option value="arcade">Аркады</option>
				<option value="platformer">Платформеры</option>
				<option value="racing">Гоночные</option>
				<option value="sports">Спорт</option>
				<option value="fighting">Драки</option>
				<option value="family">Семейные</option>
			</select>

			<div className="radioBox" onChange={(v) => props.fselect(v, 'radio')}>
				<label>
					<input type="radio" name="platform" value="4" />
					PC
				</label>
				<label>
					<input type="radio" name="platform" value="187" />
					PS5
				</label>
				<label>
					<input type="radio" name="platform" value="18" />
					PS4
				</label>
				<label>
					<input type="radio" name="platform" value="1" />
					XOne
				</label>
				<label>
					<input type="radio" name="platform" value="186" />
					Xsx
				</label>
				<label>
					<input type="radio" name="platform" value="7" />
					Switch
				</label>
			</div>

			<input onKeyUp={(v) => props.fselect(v, 'search')} name="search" id="search" type="text" className="validate" placeholder="Поиск..." />

			<button onClick={props.fclick} className="btn-floating btn-large waves-effect waves-light purple">
				<i className="material-icons">location_searching</i>
			</button>
		</div>
	);
}
