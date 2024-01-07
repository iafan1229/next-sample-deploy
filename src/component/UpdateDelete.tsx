'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function updateDelete(props: any) {
	const router = useRouter();
	return (
		<div className='board-buttons'>
			<div className='update'>
				<Link href={`/board/update/${props.id}`}>글 수정하기</Link>
			</div>
			<div className='delete'>
				<button
					onClick={async () => {
						const resp = await fetch(
							`${process.env.NEXT_PUBLIC_API_URL}/posts/${props.id}`,
							{
								method: 'DELETE',
							}
						);
						await resp.json();
						alert('글이 삭제되었습니다');
						router.push('/board/read');
					}}>
					글 삭제하기
				</button>
			</div>
		</div>
	);
}
