import { BiTrendingUp, BiTrendingDown } from 'react-icons/bi';

interface coinSupply {
	total_supply: number;
	max_supply: number;
	quotes: {
		USD: {
			price: number;
			percent_change_12h: number;
			percent_change_24h: number;
			percent_change_7d: number;
			percent_change_30d: number;
			percent_change_1y: number;
			ath_price: number;
			ath_date: number;
		};
	};
}

export default function Price() {
	const isPositive = (num: number) =>
		num >= 0 ? (
			<BiTrendingUp size={50} color='black' />
		) : (
			<BiTrendingDown size={50} color='black' />
		);

	const context: coinSupply = {
		total_supply: 10,
		max_supply: 10,
		quotes: {
			USD: {
				price: 10,
				percent_change_12h: 10,
				percent_change_24h: 10,
				percent_change_7d: 10,
				percent_change_30d: 10,
				percent_change_1y: 10,
				ath_price: 10,
				ath_date: 10,
			},
		},
	};

	return (
		<div className='price'>
			<div className='high'>
				<span>지금까지의 최고가</span>
				<p>
					{context?.quotes.USD.ath_date.toString().split('T')[0] +
						' ' +
						context?.quotes.USD.ath_date.toString().split('T')[1]}
				</p>
				<p>{context?.quotes.USD.ath_price}</p>
			</div>
			<div>
				<div className='price-list'>
					<li>
						<span>지난 12시간 동안</span>
						{context?.quotes.USD.percent_change_12h}
						{isPositive(context?.quotes.USD.percent_change_12h)}
					</li>
					<li>
						<span>지난 24시간 동안</span>
						{context?.quotes.USD.percent_change_24h}
						{isPositive(context?.quotes.USD.percent_change_24h)}
					</li>
					<li>
						<span>지난 7일 동안</span>
						{context?.quotes.USD.percent_change_7d}
						{isPositive(context?.quotes.USD.percent_change_7d)}
					</li>
					<li>
						<span>지난 30일 동안</span>
						{context?.quotes.USD.percent_change_30d}
						{isPositive(context?.quotes.USD.percent_change_30d)}
					</li>
					<li>
						<span>지난 1년 동안</span>
						{context?.quotes.USD.percent_change_1y}
						{isPositive(context?.quotes.USD.percent_change_1y)}
					</li>
				</div>
			</div>
		</div>
	);
}
