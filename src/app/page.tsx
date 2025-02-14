import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Image
					className={styles.logo}
					src='/Reyne of Color Logo - overlay.png'
					alt='Reyne of Color logo'
					width={350}
					height={180}
					priority
				/>
				<h1>Reyne of Color is under construction!</h1>
				<p>
					For now comissions are open on my instagram or you can check out my
					other websites.
				</p>

				<div className={styles.ctas}>
					<a
						className={styles.primary}
						href='https://reynedrops.ca'
						target='_blank'
						rel='noopener noreferrer'
					>
						Reyne Drops
					</a>
					<a
						href='https://instagram.com/reyne.of.color'
						target='_blank'
						rel='noopener noreferrer'
						className={styles.secondary}
					>
						Instagram
					</a>
				</div>
			</main>
		</div>
	);
}
