import Image from 'next/image';
import styles from './nav.module.css';

export default function Nav() {
	const links = [
		{
			name: 'home',
			url: '/home',
		},
		{
			name: 'about',
			url: '/about',
		},
		{
			name: 'commission',
			url: 'commission',
		},
	];

	return (
		<div className={styles.container}>
			{/* <Image
				className={styles.logo}
				src={'/Reyne of Color Logo - overlay.png'}
				alt={'reyne of color logo'}
				width={100}
				height={100}
			/> */}
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
	);
}
