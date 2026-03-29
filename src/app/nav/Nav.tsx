import Image from 'next/image';
import styles from './nav.module.css';

export default function Nav() {
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
		<div className={styles.nav}>
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
								<button>{link.name}</button>
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}
