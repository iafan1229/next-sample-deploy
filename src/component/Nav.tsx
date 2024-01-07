'use client';
import React, { useState, useEffect, SetStateAction } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const handleLogin = (callback1: Function, callback2: Function) => {
	callback1();
	callback2();
};

export default function Nav() {
	const pathName = usePathname();
	const [on, setOn] = useState(2);
	const { data: session } = useSession();

	const setStateFunction = () => {
		setOn(0);
	};
	const naverLogin = () => {
		signIn();
	};

	const naverLogout = () => {
		signOut();
	};

	useEffect(() => {
		if (pathName.includes('/board')) {
			setOn(3);
			return;
		}

		if (pathName === '/') {
			setOn(2);
			return;
		}

		if (pathName === '/info') {
			setOn(1);
			return;
		}

		setOn(0);
	}, [pathName]);
	return (
		<header>
			<h1>MENU</h1>
			<nav>
				<ul>
					{session?.user ? (
						<li className={on === 0 ? 'on' : ''}>
							<Link
								href='/'
								onClick={() => handleLogin(setStateFunction, naverLogout)}>
								Logout
							</Link>
						</li>
					) : (
						<li className={on === 0 ? 'on' : ''}>
							<Link
								href='/'
								onClick={() => handleLogin(setStateFunction, naverLogin)}>
								<img src='/img/login-svgrepo-com.svg' alt='' />
								<span>Login</span>
							</Link>
						</li>
					)}
					<li className={on === 1 ? 'on' : ''} onClick={() => setOn(1)}>
						<Link href='/info'>
							<img src='/img/user-add-svgrepo-com.svg' alt='' />
							<span>User Info</span>
						</Link>
					</li>
					<li className={on === 2 ? 'on' : ''} onClick={() => setOn(2)}>
						<Link href='/'>
							<img src='/img/list-ul-alt-svgrepo-com.svg' alt='' />
							<span>Coin List</span>
						</Link>
					</li>
					<li className={on === 3 ? 'on' : ''} onClick={() => setOn(3)}>
						<Link href='/board/read'>
							<img src='/img/board-svgrepo-com.svg' alt='' />
							<span>Board</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
