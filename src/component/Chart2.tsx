'use client';

import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Chart({
	coinPrices,
}: {
	coinPrices: [number, number, number, number, number][];
}): React.ReactElement {
	console.log(coinPrices);
	const navi = useRouter();
	const option = {
		chart: {
			id: 'apexchart-example',
		},
		xaxis: {
			categories: coinPrices.map(
				(el) => new Date(el[0]).toISOString().split('T')[0]
			),
		},
	};

	const series = [
		{
			name: 'series-1',
			data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
		},
	];

	return (
		<>
			<div className='charts'>
				<div>
					<ApexChart
						type='candlestick'
						series={[
							{
								data: coinPrices
									?.filter((el, idx) => idx < 7)
									.map((price: number[], idx: number) => {
										return {
											x: price[0],
											y: [price[1], price[2], price[3], price[4]],
										};
									}),
							},
						]}
						options={{
							chart: {
								type: 'candlestick',
								height: 350,
								toolbar: {
									show: false,
									tools: {
										download: false,
									},
								},
							},
							plotOptions: {
								candlestick: {
									colors: {
										upward: '#3C90EB',
										downward: '#DF7D46',
									},
								},
							},
							xaxis: {
								type: 'category',
								labels: {
									formatter: function (val) {
										return dayjs(val).format('MMM DD HH:mm');
									},
								},
							},
						}}
						width={'100%'}
						height={350}
					/>
				</div>
				<div className='chart-2'>
					<ApexChart
						type='line'
						options={option}
						series={series}
						height={350}
						width={'100%'}
					/>
				</div>
			</div>
			<button className='back-button' onClick={() => navi.push('/')}>
				본문으로 가기
			</button>
		</>
	);
}
