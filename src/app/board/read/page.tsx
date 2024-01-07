import BoardButton from '@/component/BoardButton';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
export const dynamic = 'force-dynamic';

export default async function Read() {
	const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/`, {
		cache: 'no-store',
	});
	const topics = await resp.json();

	return (
		<div className='board-list'>
			<h2>json 게시판</h2>
			<ul>
				{topics.map((topic: any, idx: number) => {
					return (
						<li key={topic.id}>
							<dl>
								<dt>{idx + 1}</dt>
								<dd>
									<Link href={`/board/read/${topic.id}`}>{topic.title}</Link>
								</dd>
							</dl>
							<dl className='author'>
								<dt>글쓴이</dt>
								<dd>{topic.author ? topic.author : '없음'}</dd>
							</dl>
						</li>
					);
				})}
			</ul>
			<BoardButton />
		</div>
	);
}
