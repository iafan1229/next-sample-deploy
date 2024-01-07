import UpdateDelete from '@/component/UpdateDelete';
export const dynamic = 'force-dynamic';

import Link from 'next/link';
export default async function Read(props: { params: { id: string } }) {
	const id = props.params.id;

	const resp = await fetch(`http://localhost:9999/posts/${id}`, {
		cache: 'no-cache',
	});
	const topic = await resp.json();
	return (
		<div className='board-list'>
			<div className='content-title'>
				<h2>제목: {topic.title}</h2>
				<h3>{topic.author}</h3>
			</div>
			<div>
				<p className='content'>{topic.body}</p>
			</div>
			<div>
				<div className='button'>
					<Link href='/board/read'>리스트로 돌아가기</Link>
				</div>
				<div className='update-delete'>
					<UpdateDelete id={id} />
				</div>
			</div>
		</div>
	);
}
