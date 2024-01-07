export interface exchangeIdType {
	id: string;
	name: string;
}
export interface coinListTypes {
	id: string;
	name: string;
	image: string;
	url: string;
	tickers: tickerType[];
	trust_score: number;
	trade_volume_24h_btc: number;
}

export type listType = typeof arr;

const arr = {
	id: 'dogecoin',
	symbol: 'doge',
	name: 'Dogecoin',
	image:
		'https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1696501409',
	current_price: 0.094499,
	market_cap: 13319279842,
	market_cap_rank: 10,
	fully_diluted_valuation: 13319265786,
	total_volume: 2217128404,
	high_24h: 0.10397,
	low_24h: 0.09373,
	price_change_24h: -0.005843694348244735,
	price_change_percentage_24h: -5.82375,
	market_cap_change_24h: -1186833568.6168442,
	market_cap_change_percentage_24h: -8.18161,
	circulating_supply: 142134686383.705,
	total_supply: 142134536383.705,
	max_supply: null,
	ath: 0.731578,
	ath_change_percentage: -87.17856,
	ath_date: '2021-05-08T05:08:23.458Z',
	atl: 0.0000869,
	atl_change_percentage: 107834.15305,
	atl_date: '2015-05-06T00:00:00.000Z',
	roi: null,
	last_updated: '2023-12-07T11:19:44.718Z',
};
export interface tickerType {
	coin_id: number;
	base: string;
	target: string;
	volume: number;
	last: number;
	last_fetch_at: number;
}
