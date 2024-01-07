const path = require('path');

const nextConfig = {
	images: {
		domains: ['assets.coingecko.com"'],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'scss')],
	},
	async headers() {
		return [
			{
				source: '/api/:path*', // 프록시할 API 엔드포인트 경로
				headers: [
					{ key: 'cz-shortcut-listen', value: 'value' }, // 에러를 없애기 위해 추가한 헤더
				],
			},
		];
	},
	async rewrites() {
		return [
			{
				source: '/coin/api/:path*', // 프록시할 API 엔드포인트 경로
				destination: 'https://api.coingecko.com/api/:path*', // 실제 API 서버 주소
			},
		];
	},
};

module.exports = nextConfig;
