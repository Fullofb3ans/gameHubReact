import { Cards } from './Cards';

export function Card(props) {
	return (
		<div className="col s1" style={{ width: '30%' }}>
			<div className="card">
				<div className="card-image">
					<img src={props.background_image} />
				</div>
				<div className="card-content">
					<span className="card-title">{props.name}</span>
					<p>{props.slug}</p>
				</div>
			</div>
		</div>
	);
}
