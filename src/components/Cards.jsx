import { Card } from './Card';

export function Cards(props) {
	return <div className="cardFlex"> {props.cards !== '' ? props.cards.map((item) => <Card key={item.id} name={item.name} background_image={item.background_image} slug={'Рейтинг: ' + item.rating} />) : ''}</div>;
}
