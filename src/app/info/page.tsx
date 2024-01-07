'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function InfoPage() {
	const { data: session } = useSession();

	return (
		<>
			{session ? (
				<div style={{ padding: 30 }}>
					<h3>User Info</h3>
					<p>
						email : {session?.user?.email} / name: {session?.user?.name} /
						image:
						<img src={session?.user?.image || ''} />
					</p>
				</div>
			) : (
				<div style={{ padding: 30 }}>
					<h3>로그인된 유저가 아닙니다.</h3>
				</div>
			)}
		</>
	);
}
