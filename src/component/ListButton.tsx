'use client';

import { useRouter } from 'next/navigation';

type ButtonProps = {
	children: React.ReactNode;
	// onClick: () => Promise<void>;
	key: number;
	pid: string;
};

export default function ListButton(props: ButtonProps) {
	const router = useRouter();
	const handleExchange = () => {
		router.push(`/detail/${props.pid}`);
	};

	return (
		<tr key={props.key} onClick={handleExchange}>
			{props.children}
		</tr>
	);
}
