'use client';

import {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import styles from './nav.module.css';
import Button from '../button/button';

export default function Nav() {
	const [isVisible, setIsVisible] = useState(true);
	const lastScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}

			lastScrollY.current = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll, {passive: true});
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const links = [
		{
			name: 'Home',
			url: '/',
		},
		{
			name: 'About',
			url: '/about',
		},
		{
			name: 'Projects',
			url: '/projects',
		},
		{
			name: 'In-Stock',
			url: '/in-stock',
		},
		{
			name: 'Commission',
			url: '/commission',
		},
	];

	return (
		<div
			className={`${styles.nav} ${isVisible ? styles.visible : styles.hidden}`}
		>
			<div className={styles.navContainer}>
				<Image
					className={styles.logo}
					src={'/Logo-knight-white-trans.png'}
					alt={'reyne of color logo'}
					width={100}
					height={100}
				/>
				<div className={styles.links}>
					{links.map(link => {
						return (
							<a className={styles.link} href={link.url} key={link.url}>
								{link.name}
							</a>
						);
					})}
				</div>
				<Button variant={'secondary'} size={'sm'}>
					ENLIST
				</Button>
			</div>
		</div>
	);
}
