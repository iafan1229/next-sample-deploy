import Chart2 from '@/component/Chart2';

export const bitCoinExample = {
	id: 'bitcoin',
	symbol: 'btc',
	name: 'Bitcoin',
	image:
		'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
	current_price: 43455,
	market_cap: 851441269294,
	market_cap_rank: 1,
	fully_diluted_valuation: 913970191786,
	total_volume: 26672552614,
	high_24h: 44282,
	low_24h: 43513,
	price_change_24h: -283.4433260894657,
	price_change_percentage_24h: -0.64804,
	market_cap_change_24h: -3857066066.242676,
	market_cap_change_percentage_24h: -0.45096,
	circulating_supply: 19563293,
	total_supply: 21000000,
	max_supply: 21000000,
	ath: 69045,
	ath_change_percentage: -36.8792,
	ath_date: '2021-11-10T14:24:11.849Z',
	atl: 67.81,
	atl_change_percentage: 64171.1291,
	atl_date: '2013-07-06T00:00:00.000Z',
	roi: null,
	last_updated: '2023-12-07T09:14:35.707Z',
};

type CoinDetailQueryFn<T> = (el: string) => Promise<T>;

const coinPriceOHLC: CoinDetailQueryFn<
	[number, number, number, number, number][]
> = async (el) => {
	// const result = await axios.get(`/api/${id}`);
	const res1 = await fetch(
		`https://api.coingecko.com/api/v3/coins/${el}/ohlc?vs_currency=usd&days=7

		`
	);
	const result1: [number, number, number, number, number][] = await res1.json();

	return result1.filter((el, idx) => idx < 10);
};

const coinInfo: CoinDetailQueryFn<typeof bitCoinExample> = async (el) => {
	const res2 = await fetch(
		`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${el}&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`
	);
	const result2 = await res2.json();

	return result2[0];
};

export default async function CoinList({
	params,
}: {
	params: { slug: string };
}) {
	const info = await coinInfo(params.slug);
	const priceData = await coinPriceOHLC(params.slug);

	return (
		<>
			{info && priceData.length && (
				<div className='coin-detail'>
					<div style={{ boxShadow: 'none', fontSize: 25 }} className='title'>
						<span>
							<img src={info.image} alt='' />
						</span>
						<h3> {info.name}</h3>
					</div>
					{
						<>
							<div className='rank'>
								<ul>
									<li>
										<span>순위</span>
										{info.market_cap_rank}
									</li>
									<li>
										<span>티커</span>
										{info.symbol}
									</li>
									<li>
										<span>현재가</span>
										{info?.current_price}
									</li>
								</ul>
							</div>
							<div className='supply'>
								<ul>
									<li style={{ flexBasis: '50%' }}>
										<span>총량</span>
										{info?.max_supply}
									</li>

									<li style={{ flexBasis: '50%' }}>
										<span>최대 발행량</span>
										{info?.max_supply}
									</li>
								</ul>
							</div>

							<Chart2 coinPrices={priceData} />
						</>
					}
				</div>
			)}
		</>
	);
}
