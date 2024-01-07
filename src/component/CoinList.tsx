import { listType, tickerType } from '@/types/types';
import ListButton from './ListButton';
export const fetchData = async (): Promise<listType[] | undefined> => {
	try {
		const res = await fetch(
			`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en
			`
		);
		const result = await res.json();
		const newData = [...result] as listType[];

		if (newData.length) {
			return newData;
		}
	} catch (err) {
		console.log(err);
	}
};

export default async function ListWrap() {
	const data = await fetchData();

	// const route = useRouter();

	// const [pins, setPins] = useState<listType[]>([
	// 	{
	// 		id: 'binance',
	// 		name: 'Binance',
	// 		year_established: 2017,
	// 		country: 'Cayman Islands',
	// 		description: '',
	// 		url: 'https://www.binance.com/',
	// 		image:
	// 			'https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250',
	// 		has_trading_incentive: false,
	// 		trust_score: 10,
	// 		trust_score_rank: 1,
	// 		trade_volume_24h_btc: 203063.19013344214,
	// 		trade_volume_24h_btc_normalized: 128602.6409035407,
	// 	},
	// 	{
	// 		id: 'bybit_spot',
	// 		name: 'Bybit',
	// 		year_established: 2018,
	// 		country: 'British Virgin Islands',
	// 		description:
	// 			'Bybit is a cryptocurrency exchange that offers a professional platform featuring an ultra-fast matching engine, excellent customer service and multilingual community support for crypto traders of all levels. Established in March 2018, Bybit currently serves more than 10 million users and institutions offering access to over 100 assets and contracts across Spot, Futures and Options, launchpad projects, earn products, an NFT Marketplace and more. Bybit is a proud partner of Formula One racing team, Oracle Red Bull Racing, esports teams NAVI, Astralis, Alliance, Virtus.pro, Made in Brazil (MIBR), City Esports, and Oracle Red Bull Racing Esports, and association football (soccer) teams Borussia Dortmund and Avispa Fukuoka.',
	// 		url: 'https://www.bybit.com',
	// 		image:
	// 			'https://assets.coingecko.com/markets/images/698/small/bybit_spot.png?1629971794',
	// 		has_trading_incentive: false,
	// 		trust_score: 10,
	// 		trust_score_rank: 2,
	// 		trade_volume_24h_btc: 46197.40626932077,
	// 		trade_volume_24h_btc_normalized: 46197.40626932077,
	// 	},
	// 	{
	// 		id: 'okex',
	// 		name: 'OKX',
	// 		year_established: 2017,
	// 		country: 'Seychelles',
	// 		description: '',
	// 		url: 'https://www.okx.com',
	// 		image:
	// 			'https://assets.coingecko.com/markets/images/96/small/WeChat_Image_20220117220452.png?1642428377',
	// 		has_trading_incentive: false,
	// 		trust_score: 10,
	// 		trust_score_rank: 3,
	// 		trade_volume_24h_btc: 45749.172150712824,
	// 		trade_volume_24h_btc_normalized: 45749.172150712824,
	// 	},
	// 	{
	// 		id: 'gdax',
	// 		name: 'Coinbase Exchange',
	// 		year_established: 2012,
	// 		country: 'United States',
	// 		description: '',
	// 		url: 'https://www.coinbase.com/',
	// 		image:
	// 			'https://assets.coingecko.com/markets/images/23/small/Coinbase_Coin_Primary.png?1621471875',
	// 		has_trading_incentive: false,
	// 		trust_score: 10,
	// 		trust_score_rank: 4,
	// 		trade_volume_24h_btc: 29996.25332440415,
	// 		trade_volume_24h_btc_normalized: 29996.25332440415,
	// 	},
	// 	{
	// 		id: 'gate',
	// 		name: 'Gate.io',
	// 		year_established: null,
	// 		country: 'Cayman Islands',
	// 		description:
	// 			'Gate was established in 2013, and it is the top 10 exchanges in the world in terms of authentic trading volume. It is also the first choice of over 8 million registered customers, covering 130+ countries worldwide, as we are providing the most comprehensive digital asset solutions.',
	// 		url: 'https://gate.io/',
	// 		image:
	// 			'https://assets.coingecko.com/markets/images/60/small/gate_io_logo1.jpg?1654596784',
	// 		has_trading_incentive: false,
	// 		trust_score: 10,
	// 		trust_score_rank: 5,
	// 		trade_volume_24h_btc: 21974.109063137497,
	// 		trade_volume_24h_btc_normalized: 21974.109063137497,
	// 	},
	// 	{
	// 		id: 'kucoin',
	// 		name: 'KuCoin',
	// 		year_established: 2014,
	// 		country: 'Seychelles',
	// 		description: '',
	// 		url: 'https://www.kucoin.com/',
	// 		image:
	// 			'https://assets.coingecko.com/markets/images/61/small/kucoin.png?1640584259',
	// 		has_trading_incentive: false,
	// 		trust_score: 10,
	// 		trust_score_rank: 6,
	// 		trade_volume_24h_btc: 17468.63348442858,
	// 		trade_volume_24h_btc_normalized: 17430.51223567263,
	// 	},
	// 	{
	// 		id: 'kraken',
	// 		name: 'Kraken',
	// 		year_established: 2011,
	// 		country: 'United States',
	// 		description: '',
	// 		url: 'https://www.kraken.com/',
	// 		image:
	// 			'https://assets.coingecko.com/markets/images/29/small/kraken.jpg?1584251255',
	// 		has_trading_incentive: false,
	// 		trust_score: 10,
	// 		trust_score_rank: 7,
	// 		trade_volume_24h_btc: 10873.623973046862,
	// 		trade_volume_24h_btc_normalized: 10873.623973046862,
	// 	},
	// 	{
	// 		id: 'crypto_com',
	// 		name: 'Crypto.com Exchange',
	// 		year_established: 2019,
	// 		country: 'Malta',
	// 		description:
	// 			'Crypto.com Exchange is the best place to trade crypto, with deep liquidity, low fees and best execution prices, users can trade major cryptocurrencies like Bitcoin, Ethereum, and many more and receive great CRO-powered rewards',
	// 		url: 'https://crypto.com/exchange',
	// 		image:
	// 			'https://assets.coingecko.com/markets/images/589/small/h2oMjPp6_400x400.jpg?1669699705',
	// 		has_trading_incentive: false,
	// 		trust_score: 10,
	// 		trust_score_rank: 8,
	// 		trade_volume_24h_btc: 11279.269040510242,
	// 		trade_volume_24h_btc_normalized: 9282.104329019632,
	// 	},
	// 	{
	// 		id: 'bitstamp',
	// 		name: 'Bitstamp',
	// 		year_established: 2013,
	// 		country: 'Luxembourg',
	// 		description: '',
	// 		url: 'https://links.bitstamp.net/c/2223866/1100037/14006',
	// 		image:
	// 			'https://assets.coingecko.com/markets/images/9/small/bitstamp.jpg?1519627979',
	// 		has_trading_incentive: false,
	// 		trust_score: 10,
	// 		trust_score_rank: 9,
	// 		trade_volume_24h_btc: 2040.0103556264548,
	// 		trade_volume_24h_btc_normalized: 2040.0103556264548,
	// 	},
	// 	{
	// 		id: 'binance_us',
	// 		name: 'Binance US',
	// 		year_established: 2019,
	// 		country: 'United States',
	// 		description: '',
	// 		url: 'https://www.binance.us/',
	// 		image:
	// 			'https://assets.coingecko.com/markets/images/469/small/Binance.png?1568875842',
	// 		has_trading_incentive: false,
	// 		trust_score: 10,
	// 		trust_score_rank: 10,
	// 		trade_volume_24h_btc: 354.1174166539823,
	// 		trade_volume_24h_btc_normalized: 354.1174166539823,
	// 	},
	// ]);

	//--무한스크롤 state 끝

	return (
		<>
			<h1>TOP 10 코인 거래소 리스트</h1>
			<div className='list'>
				<table>
					<colgroup>
						<col />
						<col style={{ width: '100px' }} />
						<col />
						<col />
						<col />
						<col />
					</colgroup>
					<thead>
						<tr>
							<th>이름</th>
							<th>순위</th>
							<th>이미지</th>
							<th>총량</th>
							<th>총공급량</th>
							<th>업데이트 날짜</th>
						</tr>
					</thead>
					<tbody>
						{data &&
							data.map((el: listType, idx: number) => {
								return (
									<ListButton key={idx} pid={el.id}>
										<th>{el.name}</th>
										<td>{idx + 1}</td>
										<td className='logo'>
											<img
												src={`${el.image}`}
												width='50'
												height='50'
												alt='이미지'
											/>
										</td>
										<td>{el.total_volume}</td>
										<td>{el.total_supply}</td>
										<td>{new Date(el.last_updated).toLocaleDateString()}</td>
									</ListButton>
								);
							})}
					</tbody>
				</table>
			</div>
		</>
	);
}
